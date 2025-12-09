# 🏛️ HMCTS Task Management System

This is a technical test submission designed to implement a simple task creation system consisting of a decoupled backend API and a frontend application, as requested in the task brief.

The core objective is to facilitate the creation of new tasks with validation and persistent storage, focusing on robust implementation and best practices within a given time constraint.

---

## 📋 Task Requirements Fulfilled

The system meets all specified requirements for task creation:

- **Task Properties:** Title, Description (optional), Status, and Due Date/Time are handled and stored.
- **Database Storage:** Task data is stored using **Prisma** and **SQLite**.
- **Validation & Error Handling:** The backend uses **Zod** for schema validation and returns structured 400 Bad Request responses for invalid payloads. The frontend captures and displays these errors.
- **Confirmation:** Upon successful creation, the API returns the new task object, and the frontend displays a confirmation message alongside the created task's details.
- **Unit Tests:** Unit tests are implemented for both the **Backend** (using Vitest) and the **Frontend** (using Vitest and React Testing Library).

---

## 🏗️ Architecture and Technical Stack

This project uses a simple **Monorepo structure** containing two main folders:

### 1. Backend (`/backend`)

| Component            | Purpose                                      |
| :------------------- | :------------------------------------------- |
| **Language/Runtime** | JavaScript (Node.js)                         |
| **Framework**        | Express.js                                   |
| **Database**         | SQLite                                       |
| **ORM**              | Prisma with `@prisma/adapter-better-sqlite3` |
| **Validation**       | Zod                                          |
| **Testing**          | Vitest & Supertest                           |
| **Endpoint**         | `POST /tasks`                                |

### 2. Frontend (`/frontend`)

| Component      | Purpose                              |
| :------------- | :----------------------------------- |
| **Framework**  | React with Vite                      |
| **Styling**    | Tailwind CSS                         |
| **API Client** | Axios                                |
| **Testing**    | Vitest & React Testing Library (RTL) |

---

## 🚀 Getting Started

Follow these steps to set up and run the entire application.

### Prerequisites

- Node.js (LTS version)
- npm

### Step 1: Install Dependencies

Open your terminal in the root directory and install dependencies for both services:

```bash
# 1. Install Backend Dependencies
cd backend
npm install

# 2. Install Frontend Dependencies
cd ../frontend
npm install

# 3. Return to Root
cd ..
```

### Step 2: Set up the Database

The database is configures to use a local file (dev.db). This file is provided but you can delete it and run the following command:

```bash
# Run the migration to create the Task table and the dev.db file
npx prisma migrate dev --name final_setup
```

### Step 3: Run the Application
```bash
# 1. Start the Backend API (in its own terminal session)
cd backend
npm start

# Expected output: Server running on port 3000

# 2. Start the Frontend Dev Server (in a new terminal session)
cd frontend
npm run dev

# The app will open in your browser, typically at http://localhost:5173
```

## 🧪 Running Tests

To run the unit tests for each component:

| Component | Command (run from its directory) |
| --------- | -------------------------------- |
| Backend  | `npm test` or `npx vitest` |
| Frontend | `npm test` or `npx vitest` |

## ⏱️ Timeline Estimation

The folowing timeline was established prior to starting to work, adhering to the 2.5-hour constraint.

| Phase | Estimated time |
| ------------------------------------------ | -------------------------------- |
| Project Setup (Monorepo, npm init) | 10 min |
| Backend Implementation (Express, Zod, Prisma) | 25 min |
| Backend Tests (Vitest, Supertest) | 15 min |
| Frontend Form + API Integration | 30 min |
| Frontend Polish (Tailwind, Responsiveness) | 15 min |
| Documentation (This README) | 25 min |
| Buffer | 25 min |
| Total | 150 min (2.5 hours) |

