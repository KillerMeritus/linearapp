# 🚀 LinearApp: A Modern Task Management UI

<br>


<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-98%25-blue?style=for-the-badge&logo=typescript">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-OK-orange?style=for-the-badge&logo=pnpm">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge">
</p>

<br>

---

<p align="center">
  <strong>A modern task management application built with Next.js 15, React 19, and TypeScript, featuring a Linear-inspired UI with drag-and-drop, filtering, and real-time updates.</strong>
</p>

<br>

<p align="center">
  <strong><a href="https://www.loom.com/share/84991916b2c04f8eb3a0eb9a97450adc">🔴 LIVE DEMO</a></strong>
</p>


<br>


---

<br>


## ✨ Key Features

A production-ready task management application with modern architecture and best practices.

### ⚡️ Instant UI Updates
UI updates happen immediately on the client using Zustand for state management. Creating, editing, and reordering issues feels instantaneous.

### 🎨 Beautiful UI Components
Built with shadcn/ui and Tailwind CSS, featuring a Linear-inspired design with dark mode support, smooth animations, and responsive layouts.

### 🔍 Advanced Filtering & Search
Powerful filtering system for status, assignee, priority, labels, and projects. Real-time search across issue titles and identifiers.

### 📊 Kanban Board View
Drag-and-drop Kanban board with columns for different statuses. Smooth animations using LexoRank algorithm for ordering.

### 🛡️ Error Handling
Comprehensive error boundaries and error handling throughout the application for better user experience and debugging.

### 🔒 TypeScript-First
Strongly-typed codebase for safe refactoring with clearly defined domain models (Issue, Project, Team, User).

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

The app will be running at `http://localhost:3002` with hot module reloading (HMR).

### Build for Production

```bash
pnpm build
pnpm start  # Serve the production build
```

### 🐳 Docker Deployment

Run the application using Docker for easy deployment and consistent environments.

#### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The app will be available at `http://localhost:3000`

#### Using Docker directly

```bash
# Build the Docker image
docker build -t linearapp .

# Run the container
docker run -p 3000:3000 --name linearapp linearapp

# Run in detached mode
docker run -d -p 3000:3000 --name linearapp linearapp

# Stop the container
docker stop linearapp
docker rm linearapp
```

#### Docker Environment Variables

If you need to set environment variables, you can do so in `docker-compose.yml` or pass them when running:

```bash
docker run -p 3000:3000 -e NODE_ENV=production --name linearapp linearapp
```

### Run Lint & Format

```bash
pnpm lint    # Check for linting errors
pnpm format   # Format code with Prettier
```

> **Note:** If your app requires environment variables, copy `.env.example` to `.env` and fill in your API keys/endpoints before running.

<br>


---

<br>


## 🛠️ Tech Stack & Architecture

Modern, production-ready stack with best practices.

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router for routing and server components |
| **React 19** | UI library with latest features and performance improvements |
| **TypeScript** | Type safety and developer experience |
| **Zustand** | Lightweight state management for client-side data |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **shadcn/ui** | High-quality component library built on Radix UI |
| **React DnD** | Drag-and-drop functionality for Kanban board |
| **LexoRank** | Algorithm for maintaining issue order |

### Architecture Overview

The application follows a clean architecture pattern:

1. **UI Layer** (`components/`) - React components for presentation
2. **State Layer** (`store/`) - Zustand stores for global state management
3. **Service Layer** (`services/`) - Business logic and data transformations
4. **Data Layer** (`data/`) - Type definitions and mock data
5. **Utils** (`lib/`, `utils/`) - Utility functions and helpers

### High-Level Data Flow

1. **User Action** — User creates/updates an issue
2. **State Update** — Zustand store immediately updates local state
3. **UI Re-render** — React components re-render with new state
4. **Optimistic Updates** — Changes appear instantly with loading states
5. **Error Handling** — Errors are caught and displayed via error boundaries

<br>


---

<br>


## 🧠 How It Works: The Core Logic

### 1. State Management with Zustand

The application uses Zustand for state management, providing a simple and efficient way to manage global state:

- **Issues Store** - Manages all issues, filtering, and CRUD operations
- **Filter Store** - Handles active filters for status, assignee, priority, labels, and projects
- **Search Store** - Manages search state and query
- **View Store** - Controls view type (list/grid)

All state updates are synchronous and immediate, providing instant feedback.

### 2. Drag-and-Drop with React DnD

The Kanban board uses React DnD for drag-and-drop functionality:

- **LexoRank Algorithm** - Maintains issue order using lexicographic ranking
- **Custom Drag Layer** - Provides visual feedback during dragging
- **Status Updates** - Dropping an issue automatically updates its status

### 3. Error Handling & Loading States

- **Error Boundaries** - Catch and display React errors gracefully
- **Try-Catch Blocks** - Services include comprehensive error handling
- **Loading States** - Visual feedback during async operations
- **Error Messages** - User-friendly error messages throughout the app

### 4. Performance Optimizations

- **Memoization** - useMemo and useCallback for expensive computations
- **Code Splitting** - Automatic route-based code splitting with Next.js
- **Optimistic Updates** - Immediate UI updates before server confirmation
- **Efficient Re-renders** - Zustand's selective subscriptions minimize re-renders

<br>


---

<br>


## 🔬 Project Structure

<details>
<summary><strong>Directory Layout</strong></summary>

```
linearapp/
├── app/                    # Next.js App Router pages
│   ├── [orgId]/           # Organization-scoped routes
│   │   ├── inbox/         # Notifications
│   │   ├── issues/        # Issue management
│   │   ├── projects/      # Project management
│   │   └── teams/         # Team management
│   └── layout.tsx         # Root layout
│
├── components/            # React components
│   ├── ui/                # Base UI components (shadcn/ui)
│   ├── layout/            # Layout components
│   └── common/            # Feature-specific components
│       ├── issues/        # Issue components
│       ├── projects/      # Project components
│       └── members/      # Member components
│
├── store/                 # Zustand stores
│   ├── issues-store.ts    # Issue state management
│   ├── filter-store.ts    # Filter state
│   └── ...                # Other stores
│
├── services/              # Business logic
│   ├── task-manager.service.ts
│   └── project-coordinator.service.ts
│
├── data/                  # Type definitions & mock data
│   ├── issues.ts
│   ├── projects.ts
│   └── ...
│
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

</details>

<details>
<summary><strong>Error Handling Strategy</strong></summary>

### Error Boundaries
- Global error boundary in main layout
- Catches React component errors
- Provides user-friendly error messages
- Allows error recovery

### Service-Level Error Handling
- All service methods wrapped in try-catch
- Returns safe defaults on error
- Logs errors to console in development

### Loading States
- Loading indicators during async operations
- Loading overlay components
- Loading state in stores for UI feedback

</details>

<details>
<summary><strong>State Management Pattern</strong></summary>

### Store Structure
```typescript
interface StoreState {
  // Data
  items: Item[];
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  addItem: (item: Item) => void;
  updateItem: (id: string, updates: Partial<Item>) => void;
  // ...
}
```

### Best Practices
- Single source of truth
- Immutable updates
- Error handling in actions
- Loading states for async operations

</details>

<br>


---

<br>


## 🗺️ Roadmap & Future Enhancements

### 📱 Enhanced Mobile Experience
Improved mobile responsiveness and touch gestures for drag-and-drop.

### 🚀 Backend Integration
- RESTful API or GraphQL integration
- Real-time updates with WebSockets
- Server-side persistence

### 🧪 Testing
- Unit tests for stores and services
- Component tests with React Testing Library
- E2E tests with Playwright

### 🌐 Offline Support (Future)
- IndexedDB for offline storage
- Sync queue for offline changes
- Conflict resolution for concurrent edits

### 🤖 AI Features (Future)
- Task triage suggestions
- Auto-generated descriptions
- Duplicate detection

### 🧩 Integrations (Future)
- OAuth authentication
- Slack notifications
- GitHub integration

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
