# 🚀 LinearApp: A Resilient Task Management UI

<br>


<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-98%25-blue?style=for-the-badge&logo=typescript">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-OK-orange?style=for-the-badge&logo=pnpm">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-Fast-purple?style=for-the-badge&logo=vite">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge">
</p>

<br>

---

<p align="center">
  <strong>A modern task-tracking UI showcasing robust client-side architecture with instant interactions, offline-first design, and intelligent conflict resolution.</strong>
</p>

<br>

<p align="center">
  <strong><a href="#">🔴 LIVE DEMO - Add Your URL Here</a></strong>
</p>


<br>


---

<br>


## ✨ Key Features

This isn't just a simple UI—it's a blueprint for building resilient, production-ready applications.

### ⚡️ Instant Interactions
UI updates happen immediately on the client. Creating, editing, and reordering tasks feels instantaneous with no spinners or waiting.

### 🔄 Resilient Background Sync
All changes are queued persistently. The app intelligently batches requests, retries on failure with exponential backoff, and syncs in the background.

### 🌐 Offline-First
Keep working without connectivity. The app is fully functional offline and automatically syncs all changes when you reconnect.

### 🚫 Smart Conflict Handling
When server data changes (e.g., another user edited the same task), the UI flags the conflict and provides a diff/merge view to resolve it.

### 🚄 Fluid UI & Animations
All state changes are animated. Drag-and-drop reordering uses smooth transforms, and list updates use FLIP-style transitions.

### 🔒 TypeScript-First
Strongly-typed codebase for safe refactoring with clearly defined domain models (Task, Op, QueueEntry).

<br>


---

<br>



## 🚀 Quick Start

Get the project running locally in under a minute.

### Prerequisites

- **Node.js** 18+
- **pnpm** (run `npm i -g pnpm` to install)

### Installation

```bash
# Clone the repository
git clone https://github.com/KillerMeritus/linearapp.git
cd linearapp

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

The app will be running at `http://localhost:5173` (or similar) with HMR.

### Build for Production

```bash
pnpm build
pnpm preview  # Serve the production build
```

### Run Tests & Lint

```bash
pnpm test
pnpm lint
```

> **Note:** If your app requires environment variables, copy `.env.example` to `.env` and fill in your API keys/endpoints before running.

<br>


---

<br>


## 🛠️ Tech Stack & Architecture

This project is intentionally minimal to focus on core logic and patterns.

| Technology | Purpose |
|------------|---------|
| **TypeScript** | Developer ergonomics and type safety |
| **UI Framework** | Lightweight component-based UI (React/Vue/Svelte) with hooks/stores |
| **Styling** | Plain CSS with performant transform and opacity transitions |
| **Persistence** | IndexedDB for client-side queue and operation storage |
| **Sync Engine** | Custom-built queue and dispatcher with batching, coalescing, retry logic, and conflict detection |

### High-Level Flow

1. **User Action** — User creates a task
2. **Optimistic UI** — Task immediately added to local store with temporary ID (`c_...`) and "pending" indicator
3. **Queue** — `create` operation added to persistent IndexedDB queue
4. **Sync Worker** — Worker picks up the operation
5. **Batch & Send** — Operations batched and sent to server
6. **Server Response:**
   - **Success (200)** — Server returns canonical Task with real ID, worker updates store
   - **Conflict (409)** — Server version is newer, worker marks as "conflicted", UI shows "Resolve" button
   - **Failure (50x/Network)** — Worker re-queues operation and schedules retry with exponential backoff

<br>


---

<br>


## 🧠 How It Works: The Core Logic

### 1. Optimistic Updates & The Sync Queue

When a user makes a change, we assume it will succeed:

#### Operations
Every mutation (create, update, delete, move) becomes an Operation object saved to the queue.

#### Coalescing
Multiple rapid edits to the same task are merged into a single update, saving bandwidth.

#### Batching
Sync worker flushes the queue periodically, bundling multiple operations into one HTTP request.

#### Temp IDs
New tasks get temporary IDs like `c_123xyz`. When the server confirms creation, the app atomically updates to the real ID (`server_456`) throughout the store and queue.

### 2. Conflict & Version Handling

The server is the ultimate source of truth. We use entity versions (`updatedAt` or version numbers) to detect conflicts.

#### Example Scenario

1. You load a task at version `v1`
2. You go offline
3. A colleague edits the same task → now `v2` on server
4. You come back online and edit your `v1` version

#### Resolution

1. Your client sends update for `v1`
2. Server rejects with `409 Conflict`, returns current `v2` data
3. Client marks item as conflicted, stores both versions
4. UI shows "Conflict" badge with modal offering: "Accept Server Version", "Keep My Version", or side-by-side merge view

### 3. Performance & UI Polish

The "instant" feel comes from prioritizing UI responsiveness:

#### FLIP Animations
Calculate old and new positions, use CSS transforms to animate smoothly.

#### GPU-Accelerated
All animations use `transform` and `opacity` to avoid layout thrashing.

#### Virtualization
For 1000+ items, windowing ensures only visible items are rendered.

#### Debouncing
Text field edits are debounced to queue sync operations only after user pauses typing.

<br>


---

<br>


## 🔬 Advanced Topics

<details>
<summary><strong>Edge Cases We Handle</strong></summary>

### Duplicate Ops
Deduplication by `opId` and content hash.

### Large Offline Queue
UI notifies if queue is huge, offers manual "force flush" or "clear queue".

### Partial Batch Commit
If 2 of 5 ops fail, commit the 3 successful ones and re-queue the failures.

### Clock Skew
Prefer server-generated timestamps for all canonical data.

### Concurrent Delete + Edit
If you edit a task another user deleted, UI offers: "Restore task?" or "Discard edit".

### Storage Pressure
Detect low IndexedDB quota and warn user.

</details>

<details>
<summary><strong>Observability & Debugging</strong></summary>

### Debug Mode
Enable verbose logging with `DEBUG=linearapp:*` environment flag. Logs all queue operations, batch payloads, retry timings, and server responses.

### Dev Tools Panel
Hidden "Debug" panel allows you to:

- Inspect current sync queue and operation history
- Manually "Force Sync"
- "Simulate Offline" mode
- "Simulate Server Conflict"

</details>

<details>
<summary><strong>Project Directory Layout</strong></summary>

```
src/
├── api/         # Network adapter, batching utilities
├── components/  # Presentational & container components
├── hooks/       # useStore, useSync, useOffline
├── store/       # Data models, in-memory store, sync queue logic
├── styles/      # CSS modules, transitions
├── utils/       # ID generation, diffing, time helpers
├── workers/     # Optional: Web Worker for heavy tasks
└── index.tsx    # App entry point

public/
├── demo.gif
└── ...

tests/
└── ...
```

</details>

<br>


---

<br>


## 🗺️ Roadmap & Future Enhancements

### 📱 Mobile-First UI
Fully responsive layout with touch-first reordering.

### 🚀 Real-time Sync
WebSockets or SSE for push updates, enabling true multi-user collaboration.

### 🤖 AI Features

#### Task Triage
Suggest labels or assignees for new tasks.

#### Summarization
Auto-generate descriptions from titles.

#### Duplicate Detection
Flag tasks that look similar.

### 🧩 Integrations
OAuth (GitHub, Google), Slack notifications.

### 🏢 Workspaces
Multi-team support with permissions and audit logs.

<br>


---

<br>



## 👋 Contributing

We welcome contributions! Please follow these guidelines:

1. Open an issue to discuss large changes before starting work
2. Fork the repo, create a new branch, and submit a PR
3. Run `pnpm test` and `pnpm lint` before submitting
4. Add tests for any new behavior
5. Adhere to our Code of Conduct

<br>


---

<br>


## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by the LinearApp team
</p>
