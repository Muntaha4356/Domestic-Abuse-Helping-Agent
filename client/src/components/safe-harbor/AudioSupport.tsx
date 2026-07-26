import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, AlertCircle, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onSendVoice: (base64Audio: string, mimeType: string, clientTranscript: string) => Promise<void>;
  onSendTextDirectly: (text: string) => Promise<void>;
  isTyping: boolean;
};

export function AudioSupport({ onSendVoice, onSendTextDirectly, isTyping }: Props) {
  const [isRecording, setIsRecording] = useState(false);
  const [volume, setVolume] = useState(0);
  const [showSpikeAlert, setShowSpikeAlert] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const speechRecognitionRef = useRef<any | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const transcriptRef = useRef<string>("");
  const recordStartTimeRef = useRef<number>(0);

  // Clean up audio references on unmount
  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, []);

  const cleanupAudio = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.stop();
      } catch (e) {}
      speechRecognitionRef.current = null;
    }
    mediaRecorderRef.current = null;
    analyserRef.current = null;
  };

  const startRecording = async () => {
    try {
      cleanupAudio();
      chunksRef.current = [];
      transcriptRef.current = "";

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      recordStartTimeRef.current = Date.now();

      // 1. Initialize Web Audio API Analyser
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      audioContextRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      // Start volume and spike monitoring
      monitorVolume();

      // 2. Initialize MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: mediaRecorder.mimeType || "audio/webm" });
        if (audioBlob.size > 0 && !showSpikeAlert) {
          // Convert blob to base64
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
            const base64data = reader.result as string;
            const base64String = base64data.split(",")[1];
            await onSendVoice(base64String, audioBlob.type, transcriptRef.current);
          };
        }
      };

      // 3. Initialize Web Speech API (transcription fallback for mock/local testing)
      const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        const recognition = new SpeechRecognitionClass();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        recognition.onresult = (event: any) => {
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          if (finalTranscript) {
            transcriptRef.current += (transcriptRef.current ? " " : "") + finalTranscript;
          }
        };

        speechRecognitionRef.current = recognition;
        recognition.start();
      }

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied or audio initialization failed:", err);
    }
  };

  const monitorVolume = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkVolume = () => {
      if (!analyserRef.current) return;

      analyserRef.current.getByteTimeDomainData(dataArray);

      // Calculate RMS (Root Mean Square) Amplitude
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        const val = (dataArray[i] - 128) / 128; // Normalize to [-1.0, 1.0]
        sum += val * val;
      }
      const rms = Math.sqrt(sum / bufferLength);

      // Update state for visual scale animations
      setVolume(rms);

      // Sudden loudness detection:
      // Trigger if RMS exceeds 0.40 and recording has been active for more than 750ms
      // (to prevent false triggers from initialization pops)
      const isSpike = rms > 0.4;
      const hasTimePassed = Date.now() - recordStartTimeRef.current > 750;

      if (isSpike && hasTimePassed) {
        triggerSpikeAlert();
        return;
      }

      animationFrameRef.current = requestAnimationFrame(checkVolume);
    };

    animationFrameRef.current = requestAnimationFrame(checkVolume);
  };

  const triggerSpikeAlert = () => {
    // 1. Instantly stop recording to free microphone
    cleanupAudio();
    setIsRecording(false);
    setVolume(0);
    // 2. Open alert overlay
    setShowSpikeAlert(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      cleanupAudio();
      setIsRecording(false);
      setVolume(0);
    }
  };

  const cancelRecording = () => {
    cleanupAudio();
    setIsRecording(false);
    setVolume(0);
    chunksRef.current = [];
    transcriptRef.current = "";
  };

  const handleAlertResponse = async (needsHelp: boolean) => {
    setShowSpikeAlert(false);
    if (needsHelp) {
      // Send message "I need help" directly to trigger the crisis/call recommendation pipeline
      await onSendTextDirectly("I need help");
    }
  };

  return (
    <>
      {/* Microphone Control Button */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {isRecording && (
            <motion.button
              key="cancel-rec"
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={cancelRecording}
              aria-label="Cancel recording"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-muted/80"
            >
              <Trash2 className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          type="button"
          disabled={isTyping}
          onClick={isRecording ? stopRecording : startRecording}
          aria-label={isRecording ? "Stop and send voice message" : "Record voice message"}
          className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            isRecording
              ? "bg-destructive text-destructive-foreground hover:brightness-105"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50"
          }`}
        >
          {/* Animated Glowing Ring based on Mic Amplitude */}
          {isRecording && (
            <span
              className="absolute inset-0 rounded-full bg-destructive/30 pointer-events-none"
              style={{
                transform: `scale(${1 + volume * 1.5})`,
                transition: "transform 75ms ease-out",
              }}
            />
          )}

          {isRecording ? <MicOff className="h-4 w-4 z-10" /> : <Mic className="h-4 w-4" />}
        </button>
      </div>

      {/* Ambient Noise Spike Warning Overlay */}
      <AnimatePresence>
        {showSpikeAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-sm rounded-2xl border border-destructive/20 bg-card p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="rounded-full bg-destructive/10 p-3 text-destructive">
                  <AlertCircle className="h-8 w-8 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Are you okay?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We detected a sudden loud noise. Do you need help or support resources?
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => handleAlertResponse(true)}
                    className="w-full rounded-xl bg-destructive hover:bg-destructive/95 px-4 py-3 text-sm font-semibold text-destructive-foreground shadow-md transition-all active:scale-[0.98]"
                  >
                    Yes, help me
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAlertResponse(false)}
                    className="w-full rounded-xl bg-secondary hover:bg-secondary/90 px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all"
                  >
                    No, I'm fine
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
