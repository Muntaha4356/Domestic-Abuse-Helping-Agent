import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { i as resources, n as initialMessages } from "./mockData-DBQxa0gP.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DBPFBC2Y.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { _ as CloudRain, a as Sun, b as ArrowLeft, c as Phone, d as MessageCircle, f as MapPin, g as Cloud, h as Heart, i as Trash2, l as Mic, m as Lock, n as Wind, o as Settings, p as LogOut, r as TriangleAlert, s as Send, t as X, u as MicOff, v as Clock, y as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ByPAHV_c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function Welcome({ onStart, onStealth }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[100dvh] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "radial-gradient(60% 50% at 20% 10%, oklch(0.92 0.04 200 / 0.55), transparent 70%), radial-gradient(50% 40% at 90% 20%, oklch(0.9 0.04 235 / 0.5), transparent 70%), radial-gradient(60% 50% at 50% 100%, oklch(0.94 0.03 85 / 0.7), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex min-h-[100dvh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-1.5 w-1.5 rounded-full bg-sage",
						"aria-hidden": true
					}), "Santa Cruz, California"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .1,
						ease: "easeOut"
					},
					className: "mt-6 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl",
					children: "A calm place to be heard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .2,
						ease: "easeOut"
					},
					className: "mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground text-balance sm:text-base",
					children: "Safe Harbor is a private, trauma-informed space to talk things through at your own pace. Share as much or as little as you'd like. There's no right way to begin."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					onClick: onStart,
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .35,
						ease: "easeOut"
					},
					whileHover: { scale: 1.02 },
					whileTap: { scale: .98 },
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), "Start chat"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					onClick: onStealth,
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .42,
						ease: "easeOut"
					},
					whileHover: { scale: 1.02 },
					whileTap: { scale: .98 },
					className: "mt-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), "Open disguised as weather"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .6,
						delay: .5
					},
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					}), "Nothing you type is saved"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .6
					},
					className: "mt-12 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-3",
					children: [
						{
							icon: Heart,
							label: "Trauma-informed"
						},
						{
							icon: Lock,
							label: "Private by default"
						},
						{
							icon: MessageCircle,
							label: "At your pace"
						}
					].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 rounded-2xl border border-border/50 bg-card/50 px-3 py-2.5 text-xs text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-3.5 w-3.5 text-primary/70",
							"aria-hidden": true
						}), label]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-sm text-[11px] leading-relaxed text-muted-foreground/80",
					children: "If you're in immediate danger, please call 911. Safe Harbor is a supportive space, not a crisis line."
				})
			]
		})]
	});
}
function MessageBubble({ role, children }) {
	const isUser = role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .3,
			ease: "easeOut"
		},
		className: `flex w-full ${isUser ? "justify-end" : "justify-start"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: isUser ? "max-w-[80%] rounded-3xl rounded-br-lg bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground shadow-sm sm:text-[15px]" : "max-w-[85%] rounded-3xl rounded-bl-lg bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground shadow-sm sm:text-[15px]",
			children
		})
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 4
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: { opacity: 0 },
		className: "flex items-center gap-1.5 rounded-3xl rounded-bl-lg bg-secondary px-4 py-3 text-secondary-foreground shadow-sm",
		"aria-label": "Assistant is typing",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "block h-2 w-2 rounded-full bg-foreground/40",
			animate: {
				y: [
					0,
					-3,
					0
				],
				opacity: [
					.4,
					1,
					.4
				]
			},
			transition: {
				duration: 1.1,
				repeat: Infinity,
				ease: "easeInOut",
				delay: i * .15
			}
		}, i))
	});
}
function ResourceCard({ resource, onOfferHandoff }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .35,
			ease: "easeOut"
		},
		className: "w-full max-w-md rounded-3xl border border-border/60 bg-card p-5 shadow-sm shadow-primary/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "h-3.5 w-3.5",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Santa Cruz" }),
							resource.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-sage-soft px-2 py-0.5 text-[10px] font-semibold text-foreground/70",
								children: resource.tag
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1.5 truncate font-serif text-lg text-foreground",
						children: resource.name
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: resource.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: resource.phoneHref,
					className: "inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-sage-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), resource.phone]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: resource.hours })]
				})]
			}),
			onOfferHandoff && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOfferHandoff(resource),
				className: "mt-4 w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: ["Prepare a message for ", resource.name.split(" ")[0]]
			})
		]
	});
}
function HandoffModal({ open, resource, onConfirm, onCancel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && resource && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-40 flex items-end justify-center bg-foreground/20 p-4 backdrop-blur-sm sm:items-center",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onCancel,
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "handoff-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: 20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: 12,
				opacity: 0
			},
			transition: {
				duration: .25,
				ease: "easeOut"
			},
			className: "relative w-full max-w-md rounded-3xl bg-card p-6 shadow-xl shadow-black/10",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					"aria-label": "Close",
					className: "absolute top-3 right-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "handoff-title",
					className: "font-serif text-xl text-foreground",
					children: "Warm handoff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Would you like me to prepare a short message you could send to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: resource.name
						}),
						"? You'll see it first — nothing sends automatically."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCancel,
						className: "rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: "Not right now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onConfirm,
						className: "rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: "Yes, prepare it"
					})]
				})
			]
		})
	}) });
}
var contacts = [
	{
		name: "Emergency",
		label: "911",
		href: "tel:911",
		note: "Use only if you are in immediate danger."
	},
	{
		name: "Monarch Services",
		label: "(888) 900-4232",
		href: "tel:+18889004232",
		note: "24/7 confidential support — Santa Cruz County."
	},
	{
		name: "Crisis Text Line",
		label: "Text HOME to 741741",
		href: "sms:741741?body=HOME",
		note: "Free, 24/7 text support."
	}
];
function CrisisDial({ className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = original;
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className,
		"aria-label": "Get help now",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
			className: "h-4 w-4",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get help" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-overlay p-4 backdrop-blur-sm sm:items-center",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: 24
			},
			transition: { duration: .2 },
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-sm rounded-3xl border border-border bg-card p-5 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg font-medium text-foreground",
						children: "Get help now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-5 w-5",
							"aria-hidden": true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-start gap-2.5 rounded-2xl bg-destructive/10 p-3 text-sm text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "mt-0.5 h-4 w-4 shrink-0",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "If you are in immediate danger, call 911. Safe Harbor is not a crisis line." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2.5",
					children: contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.href,
						className: "flex items-center justify-between rounded-2xl border border-border bg-background p-4 transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-primary",
									children: c.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: c.note
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "h-5 w-5 shrink-0 text-primary",
							"aria-hidden": true
						})]
					}, c.name))
				})
			]
		})
	}) })] });
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendChatInputSchema = objectType({
	message: stringType().trim().min(1).max(4e3),
	history: arrayType(objectType({
		role: enumType(["user", "assistant"]),
		content: stringType()
	}))
});
var sendChatMessage = createServerFn({ method: "POST" }).validator((data) => sendChatInputSchema.parse(data)).handler(createSsrRpc("a321fe2194a921581fef2414e566f7a5282f648f08f25d41814b7f1c063e265f"));
function AudioSupport({ onSendVoice, onSendTextDirectly, isTyping }) {
	const [isRecording, setIsRecording] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(0);
	const [showSpikeAlert, setShowSpikeAlert] = (0, import_react.useState)(false);
	const mediaRecorderRef = (0, import_react.useRef)(null);
	const audioContextRef = (0, import_react.useRef)(null);
	const analyserRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const animationFrameRef = (0, import_react.useRef)(null);
	const speechRecognitionRef = (0, import_react.useRef)(null);
	const chunksRef = (0, import_react.useRef)([]);
	const transcriptRef = (0, import_react.useRef)("");
	const recordStartTimeRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
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
			const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			audioContextRef.current = audioCtx;
			const source = audioCtx.createMediaStreamSource(stream);
			const analyser = audioCtx.createAnalyser();
			analyser.fftSize = 256;
			analyserRef.current = analyser;
			source.connect(analyser);
			monitorVolume();
			const mediaRecorder = new MediaRecorder(stream);
			mediaRecorderRef.current = mediaRecorder;
			mediaRecorder.ondataavailable = (e) => {
				if (e.data.size > 0) chunksRef.current.push(e.data);
			};
			mediaRecorder.onstop = async () => {
				const audioBlob = new Blob(chunksRef.current, { type: mediaRecorder.mimeType || "audio/webm" });
				if (audioBlob.size > 0 && !showSpikeAlert) {
					const reader = new FileReader();
					reader.readAsDataURL(audioBlob);
					reader.onloadend = async () => {
						const base64String = reader.result.split(",")[1];
						await onSendVoice(base64String, audioBlob.type, transcriptRef.current);
					};
				}
			};
			const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
			if (SpeechRecognitionClass) {
				const recognition = new SpeechRecognitionClass();
				recognition.continuous = true;
				recognition.interimResults = false;
				recognition.lang = "en-US";
				recognition.onresult = (event) => {
					let finalTranscript = "";
					for (let i = event.resultIndex; i < event.results.length; ++i) if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
					if (finalTranscript) transcriptRef.current += (transcriptRef.current ? " " : "") + finalTranscript;
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
			let sum = 0;
			for (let i = 0; i < bufferLength; i++) {
				const val = (dataArray[i] - 128) / 128;
				sum += val * val;
			}
			const rms = Math.sqrt(sum / bufferLength);
			setVolume(rms);
			const isSpike = rms > .4;
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
		cleanupAudio();
		setIsRecording(false);
		setVolume(0);
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
	const handleAlertResponse = async (needsHelp) => {
		setShowSpikeAlert(false);
		if (needsHelp) await onSendTextDirectly("I need help");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isRecording && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			type: "button",
			initial: {
				opacity: 0,
				scale: .8
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				scale: .8
			},
			onClick: cancelRecording,
			"aria-label": "Cancel recording",
			className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-muted/80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
		}, "cancel-rec") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			disabled: isTyping,
			onClick: isRecording ? stopRecording : startRecording,
			"aria-label": isRecording ? "Stop and send voice message" : "Record voice message",
			className: `relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isRecording ? "bg-destructive text-destructive-foreground hover:brightness-105" : "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50"}`,
			children: [isRecording && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-0 rounded-full bg-destructive/30 pointer-events-none",
				style: {
					transform: `scale(${1 + volume * 1.5})`,
					transition: "transform 75ms ease-out"
				}
			}), isRecording ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "h-4 w-4 z-10" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showSpikeAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scale: .95,
				y: 15
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: 15
			},
			className: "w-full max-w-sm rounded-2xl border border-destructive/20 bg-card p-6 shadow-2xl backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-full bg-destructive/10 p-3 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-8 w-8 animate-bounce" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-foreground",
						children: "Are you okay?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "We detected a sudden loud noise. Do you need help or support resources?"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col gap-2 mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleAlertResponse(true),
							className: "w-full rounded-xl bg-destructive hover:bg-destructive/95 px-4 py-3 text-sm font-semibold text-destructive-foreground shadow-md transition-all active:scale-[0.98]",
							children: "Yes, help me"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleAlertResponse(false),
							className: "w-full rounded-xl bg-secondary hover:bg-secondary/90 px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all",
							children: "No, I'm fine"
						})]
					})
				]
			})
		})
	}) })] });
}
var sendVoiceInputSchema = objectType({
	base64Audio: stringType(),
	mimeType: stringType(),
	clientTranscript: stringType().optional(),
	history: arrayType(objectType({
		role: enumType(["user", "assistant"]),
		content: stringType()
	}))
});
var sendVoiceMessage = createServerFn({ method: "POST" }).validator((data) => sendVoiceInputSchema.parse(data)).handler(createSsrRpc("3f65130c504e802836b3569f9453e2eeeffad12a49b10cc43e243d92d90b36ce"));
var findResource = (id) => resources.find((r) => r.id === id);
function ChatWindow({ onLeave }) {
	const [messages, setMessages] = (0, import_react.useState)(initialMessages);
	const [input, setInput] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [handoffResource, setHandoffResource] = (0, import_react.useState)(null);
	const scrollRef = (0, import_react.useRef)(null);
	const sendMessage = useServerFn(sendChatMessage);
	const sendVoice = useServerFn(sendVoiceMessage);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, isTyping]);
	const handleSendTextDirectly = async (text) => {
		if (isTyping) return;
		const userMsg = {
			id: `u-${Date.now()}`,
			role: "user",
			kind: "text",
			content: text
		};
		setMessages((m) => [...m, userMsg]);
		setIsTyping(true);
		const history = messages.filter((m) => m.kind === "text").map((m) => ({
			role: m.role,
			content: m.content
		}));
		try {
			const result = await sendMessage({ data: {
				message: text,
				history
			} });
			const next = [{
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: result.reply
			}];
			if (result.resourceId) next.push({
				id: `r-${Date.now()}`,
				role: "assistant",
				kind: "resource",
				resourceId: result.resourceId
			});
			if (result.callLink) next.push({
				id: `c-${Date.now()}`,
				role: "assistant",
				kind: "call_prompt",
				callLink: result.callLink,
				resourceName: result.callResourceName || "Monarch Services"
			});
			setMessages((m) => [...m, ...next]);
		} catch {
			setMessages((m) => [...m, {
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: "I'm having trouble connecting right now. Please try again in a moment, or use the crisis line above if you need immediate help."
			}]);
		} finally {
			setIsTyping(false);
		}
	};
	const handleSendVoice = async (base64Audio, mimeType, clientTranscript) => {
		if (isTyping) return;
		const userMsg = {
			id: `u-${Date.now()}`,
			role: "user",
			kind: "text",
			content: clientTranscript || "[Voice Message]"
		};
		setMessages((m) => [...m, userMsg]);
		setIsTyping(true);
		const history = messages.filter((m) => m.kind === "text").map((m) => ({
			role: m.role,
			content: m.content
		}));
		try {
			const result = await sendVoice({ data: {
				base64Audio,
				mimeType,
				clientTranscript,
				history
			} });
			if (result.transcription) setMessages((m) => m.map((msg) => msg.id === userMsg.id ? {
				...msg,
				content: result.transcription
			} : msg));
			const next = [{
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: result.reply
			}];
			if (result.resourceId) next.push({
				id: `r-${Date.now()}`,
				role: "assistant",
				kind: "resource",
				resourceId: result.resourceId
			});
			if (result.callLink) next.push({
				id: `c-${Date.now()}`,
				role: "assistant",
				kind: "call_prompt",
				callLink: result.callLink,
				resourceName: result.callResourceName || "Monarch Services"
			});
			setMessages((m) => [...m, ...next]);
		} catch {
			setMessages((m) => [...m, {
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: "Sorry, I had trouble processing your voice recording. Please try again or type instead."
			}]);
		} finally {
			setIsTyping(false);
		}
	};
	const handleSend = async (e) => {
		e?.preventDefault();
		const text = input.trim();
		if (!text || isTyping) return;
		const userMsg = {
			id: `u-${Date.now()}`,
			role: "user",
			kind: "text",
			content: text
		};
		setMessages((m) => [...m, userMsg]);
		setInput("");
		setIsTyping(true);
		const history = messages.filter((m) => m.kind === "text").map((m) => ({
			role: m.role,
			content: m.content
		}));
		try {
			const result = await sendMessage({ data: {
				message: text,
				history
			} });
			const next = [{
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: result.reply
			}];
			if (result.resourceId) next.push({
				id: `r-${Date.now()}`,
				role: "assistant",
				kind: "resource",
				resourceId: result.resourceId
			});
			if (result.callLink) next.push({
				id: `c-${Date.now()}`,
				role: "assistant",
				kind: "call_prompt",
				callLink: result.callLink,
				resourceName: result.callResourceName || "Monarch Services"
			});
			setMessages((m) => [...m, ...next]);
		} catch {
			setMessages((m) => [...m, {
				id: `a-${Date.now()}`,
				role: "assistant",
				kind: "text",
				content: "I'm having trouble connecting right now. Please try again in a moment, or use the crisis line above if you need immediate help."
			}]);
		} finally {
			setIsTyping(false);
		}
	};
	const confirmHandoff = () => {
		if (!handoffResource) return;
		const r = handoffResource;
		setHandoffResource(null);
		setMessages((m) => [...m, {
			id: `a-${Date.now()}`,
			role: "assistant",
			kind: "text",
			content: `Okay. Here's a draft you could send to ${r.name}: "Hi, I'd like to talk with someone. I'm not in immediate danger, but I could use support." You can change any of it before sending.`
		}]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-[100dvh] w-full max-w-2xl flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 px-4 pt-20 pb-3 sm:pt-24 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onLeave,
					className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrisisDial, { className: "inline-flex items-center gap-1.5 rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-1.5 px-4 pb-3 text-xs text-muted-foreground sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
					className: "h-3.5 w-3.5",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nothing you type is saved" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex-1 overflow-y-auto px-4 pb-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: messages.map((m) => {
							if (m.kind === "text") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
								role: m.role,
								children: m.content
							}, m.id);
							if (m.kind === "resource") {
								const r = findResource(m.resourceId);
								if (!r) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										y: 8
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "flex w-full justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
										resource: r,
										onOfferHandoff: (res) => setHandoffResource(res)
									})
								}, m.id);
							}
							if (m.kind === "call_prompt") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "flex w-full justify-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-2 max-w-[85%]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: m.callLink,
										id: `call-btn-${m.id}`,
										className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-destructive px-5 py-3.5 text-sm font-semibold text-destructive-foreground shadow-lg hover:bg-destructive/90 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Call ",
											m.resourceName,
											" Now"
										] })]
									})
								})
							}, m.id);
							return null;
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-full justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {})
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSend,
				className: "border-t border-border/60 bg-background/80 px-3 py-3 backdrop-blur sm:px-6 sm:py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2 rounded-3xl border border-border bg-card px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-ring/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSend();
								}
							},
							rows: 1,
							placeholder: "Share what's on your mind…",
							"aria-label": "Message",
							className: "max-h-40 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioSupport, {
							onSendVoice: handleSendVoice,
							onSendTextDirectly: handleSendTextDirectly,
							isTyping
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !input.trim(),
							"aria-label": "Send message",
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-[11px] text-muted-foreground",
					children: "This is a prototype. Not a substitute for emergency services — if you're in immediate danger, call 911."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandoffModal, {
				open: handoffResource !== null,
				resource: handoffResource,
				onConfirm: confirmHandoff,
				onCancel: () => setHandoffResource(null)
			})
		]
	});
}
var STORAGE_PREFIX = "safe-harbor-";
var STEALTH_KEY = `${STORAGE_PREFIX}stealth`;
function getStealthEnabled() {
	if (typeof window === "undefined") return false;
	try {
		return window.localStorage.getItem(STEALTH_KEY) === "true";
	} catch {
		return false;
	}
}
function setStealthEnabled(value) {
	if (typeof window === "undefined") return;
	try {
		if (value) window.localStorage.setItem(STEALTH_KEY, "true");
		else window.localStorage.removeItem(STEALTH_KEY);
	} catch {}
}
function clearSafeHarborStorage() {
	if (typeof window === "undefined") return;
	try {
		const keys = [];
		for (let i = 0; i < window.localStorage.length; i++) {
			const key = window.localStorage.key(i);
			if (key?.startsWith(STORAGE_PREFIX)) keys.push(key);
		}
		keys.forEach((key) => window.localStorage.removeItem(key));
	} catch {}
}
/**
* Always-visible safety exit. Instantly navigates away from the app.
* Uses window.location.replace so the current page isn't left in history.
* Clears any local Safe Harbor state before leaving.
*/
function QuickExitButton() {
	const handleExit = () => {
		clearSafeHarborStorage();
		try {
			window.history.replaceState(null, "", "/");
		} catch {}
		window.location.replace("https://www.google.com/search?q=weather");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		onClick: handleExit,
		"aria-label": "Quick exit — leave this site immediately",
		initial: {
			opacity: 0,
			y: -6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		whileHover: { scale: 1.03 },
		whileTap: { scale: .97 },
		className: "fixed top-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-exit px-4 py-2.5 text-sm font-medium text-exit-foreground shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exit/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:top-6 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
			className: "h-4 w-4",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quick exit" })]
	});
}
var forecast = [
	{
		day: "Tue",
		icon: Sun,
		high: 70,
		low: 54
	},
	{
		day: "Wed",
		icon: Cloud,
		high: 68,
		low: 52
	},
	{
		day: "Thu",
		icon: CloudRain,
		high: 64,
		low: 51
	},
	{
		day: "Fri",
		icon: Sun,
		high: 72,
		low: 55
	},
	{
		day: "Sat",
		icon: Wind,
		high: 69,
		low: 53
	}
];
function StealthShell({ onReturn }) {
	const [showHint, setShowHint] = (0, import_react.useState)(false);
	const pressTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const previousTitle = document.title;
		document.title = "Santa Cruz Weather";
		const showTimer = window.setTimeout(() => setShowHint(true), 800);
		const hideTimer = window.setTimeout(() => setShowHint(false), 6e3);
		return () => {
			document.title = previousTitle;
			window.clearTimeout(showTimer);
			window.clearTimeout(hideTimer);
			if (pressTimer.current) window.clearTimeout(pressTimer.current);
		};
	}, []);
	const startPress = () => {
		if (pressTimer.current) window.clearTimeout(pressTimer.current);
		pressTimer.current = window.setTimeout(() => {
			onReturn();
		}, 1600);
	};
	const cancelPress = () => {
		if (pressTimer.current) {
			window.clearTimeout(pressTimer.current);
			pressTimer.current = null;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex min-h-[100dvh] flex-col overflow-hidden bg-gradient-to-br from-sky-soft via-cream to-background",
		onClick: () => setShowHint(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Santa Cruz, CA" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Settings",
						className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
							className: "h-5 w-5",
							"aria-hidden": true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onMouseDown: startPress,
							onMouseUp: cancelPress,
							onMouseLeave: cancelPress,
							onTouchStart: startPress,
							onTouchEnd: cancelPress,
							onContextMenu: (e) => e.preventDefault(),
							"aria-label": "Current weather. Press and hold to return.",
							className: "relative rounded-full p-4 transition-transform active:scale-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								className: "h-24 w-24 text-weather-sun",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-6xl font-light tracking-tight text-foreground",
							children: "68°"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground",
							children: "Partly Cloudy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-4 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "H: 72°" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "L: 53°" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-5 gap-2",
					children: forecast.map(({ day, icon: Icon, high, low }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-1 rounded-2xl border border-border/40 bg-card/70 p-3 backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-muted-foreground",
								children: day
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5 text-foreground",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-medium text-foreground",
								children: [high, "°"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [low, "°"]
							})
						]
					}, day))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						className: "max-w-[16rem] text-center text-xs text-muted-foreground/70",
						children: "Press and hold the weather icon for 2 seconds to return."
					}) })
				})
			]
		})
	});
}
function Index() {
	const [started, setStarted] = (0, import_react.useState)(false);
	const [stealth, setStealth] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (getStealthEnabled()) setStealth(true);
	}, []);
	const enterStealth = () => {
		setStealthEnabled(true);
		setStealth(true);
	};
	const returnFromStealth = () => {
		setStealthEnabled(false);
		setStealth(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[100dvh] bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickExitButton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: stealth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .3 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StealthShell, { onReturn: returnFromStealth })
			}, "stealth") : !started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .35 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {
					onStart: () => setStarted(true),
					onStealth: enterStealth
				})
			}, "welcome") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: { opacity: 0 },
				transition: { duration: .35 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, { onLeave: () => setStarted(false) })
			}, "chat")
		})]
	});
}
//#endregion
export { Index as component };
