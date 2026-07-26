# Safe Harbor

**Navigating life after abuse**

Safe Harbor is a private, trauma-informed AI chat companion built for CruzHacks, Gemma 4 Hackathon (Autonomous Agent Track). It helps women figure out what kind of support they need after experiencing abuse, and connects them to real local resources, entirely on their own terms, with nothing ever saved.

> If you are in immediate danger, please call your local emergency number. Safe Harbor is a supportive space, not a crisis dispatch service.

---

## The Problem

Globally, about 1 in 3 women — an estimated 840 million — will experience physical or sexual violence in her lifetime (World Health Organization). Most tools built for this crisis focus on the moment of danger. Safe Harbor focuses on what comes *after* — the moment someone doesn't know where to go, who to trust, or how to safely ask for help.

## What It Does

- A private chat interface where a woman can describe her situation in her own words
- Gemma 4 reasons about the conversation and, when appropriate, surfaces a real local support resource (crisis line, shelter, legal aid, or counseling)
- If she chooses, Gemma 4 can prepare a one-tap phone call to that resource — but the call is only ever placed when she taps it herself
- **Quick-exit button** — instantly navigates away, no trace left
- **Disguise mode** — the entire interface can present itself as an ordinary weather app
- **Zero data persistence** — no database, no logs, nothing saved beyond the active session

## Why Gemma 4

We used Gemma 4 (`gemma-4-26b-a4b-it`) for its native function-calling support, which lets the model decide *when* and *which* tool to call based on conversational context rather than rigid keyword matching. This is core to the app, not decoration — the model reasons about the conversation and autonomously invokes:

- `getLocalResource(category)` — retrieves a matching local resource from a curated dataset
- `initiateCall(phone, resourceName)` — prepares a `tel:` link for a suggested resource

No fine-tuning and no vector-based RAG were used. Our resource dataset is small, curated, and categorical, so structured function-call retrieval is the right architectural fit — not a limitation. Fine-tuning was deliberately ruled out: it would require a labeled dataset and safety evaluation that cannot be done responsibly in a one-day sprint.

## Design Principle: Consent Over Automation

Nothing in this app acts without the user's explicit, in-the-moment confirmation. We deliberately avoided building auto-detection or auto-escalation (e.g. treating silence as a danger signal), because acting on ambiguous signals risks real harm rather than preventing it. Every meaningful action — placing a call, exiting the app — requires a direct, physical tap from the user, on her own device.

## Tech Stack

- **Frontend:** React (TanStack Start) + Tailwind CSS
- **Model access:** Gemini API via `@google/genai` (Google AI Studio)
- **Server:** TanStack Start's built-in server functions — no separate backend framework
- **Persistence:** None, by design

## Getting Started

```bash
git clone <this-repo-url>
cd safe-harbor
npm install
```

Create a `.env` file in the project root:

```
GEMINI_API_KEY=your_key_here
```

Get a free API key at [Google AI Studio](https://aistudio.google.com/) — no billing setup required.

Run the dev server:

```bash
npm run dev
```

Open the local URL printed in your terminal.

## Project Structure

```
src/
  components/     # UI components (chat window, message bubbles, resource cards, quick-exit, disguise mode)
  lib/
    resources.ts      # Curated local support resource dataset
    gemma.server.ts    # Server function: Gemma 4 calls + function-calling logic
  routes/         # App routes
```

## Safety & Ethics Notes

- No conversation content is stored, logged, or transmitted anywhere beyond the single request/response cycle needed to generate a reply.
- The app never mentions or suggests contacting emergency services unless the user brings it up first.
- The app never assumes urgency or danger from silence, short answers, or inactivity.
- All resource data is publicly available information from real Santa Cruz County organizations, used here to demonstrate the concept; the architecture is designed to be adaptable to any region's local resources.

## Built For

CruzHacks Gemma 4 Hackathon — Autonomous Agent Track (best use of Gemma 4's native function calling to build local AI agents that interact with external APIs).

## Team

Built solo, overnight, by Sidra tul Muntaha.
