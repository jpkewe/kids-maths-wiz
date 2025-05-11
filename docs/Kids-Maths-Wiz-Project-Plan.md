## Kids Maths Wiz Project Plan

### 1. Project Overview

**Goal:** To develop a secure, offline math learning app for children aged 4–6, focusing on basic arithmetic through interactive learning and parental customization.
**Platform:** Desktop
**Target Audience:** Children aged 4–6
**Deployment Mode:** Offline-Only
**Key Principles:** Security (no data transmission), Usability (child-friendly UI), Accessibility (pre-literate users, voice prompts), Performance (fast startup, instant response).

### 2. Core Features

*   **Arithmetic Operations:** Support for Addition, Subtraction, Multiplication, and Division.
*   **Random Mode:** Option to randomize between enabled operations.
*   **Gameplay:** Randomly generated problems with configurable operand ranges and complexity (2-4 operands). Input via a full-screen numpad overlay.
*   **Feedback System:** Positive visual (confetti) and audio ("Hooray!") and voice ("You got the right answer!") feedback for correct answers; calm audio ("Oops! Not quite. Try again!") for incorrect answers. No penalties.
*   **Progress Tracking:** Local tracking of total questions, correct/incorrect counts, accuracy, and per-operation performance for a **single child profile**. Visual dashboard with motivational elements.
*   **Parental Settings:** Password-protected menu (simple 4-digit PIN stored as plain text) for configuring enabled operations, random mode, operand ranges, complexity, and audio controls. Option to view and reset progress.
*   **Audio and Voice:** Startup audio, voice prompts for instructions and feedback, optional background music.

### 3. Technical Stack

*   **Preferred Stack:** React, TypeScript, Tailwind CSS, Shadcn components, SQLite (for local data storage).
*   **Audio Assets:** Pre-recorded, slow, clear voice.
*   **Math Engine:** Seeded random generation, operand bounds enforcement, result computation and validation.

### 4. Development Plan

This plan follows the milestones outlined in the Task List ([`docs/Task-List.md`](docs/Task-List.md)), with additional detail.

#### T-01: Project Setup
*   **T-01-01: Create Basic Project Structure:** Set up the foundational folder structure for a React/TypeScript application.
*   **T-01-02: Configure Development Environment:** Integrate TypeScript, ESLint, and Prettier for code quality and consistency.
*   **T-01-03: Set Up UI Framework:** Install and configure Tailwind CSS and Shadcn components to facilitate UI development.

#### T-02: Core Math Engine
*   **T-02-01: Implement Operation Generators:** Develop functions to generate random arithmetic problems for each of the four operations, considering operand ranges.
*   **T-02-02: Implement Answer Validation:** Create logic to accurately check the user's input against the calculated correct answer for each problem.
*   **T-02-03: Implement Difficulty Settings:** Build the functionality to adjust the range of operands and the number of operands per question based on parental configuration.

#### T-03: User Interface Development
*   **T-03-01: Create Main Menu:** Design and implement the main screen with large, icon-based buttons for each operation and the Random Mode (if enabled).
*   **T-03-02: Implement Game Screen:** Develop the screen where math problems are displayed, including a large input field for the answer.
*   **T-03-03: Implement Numpad Overlay:** Create a full-screen overlay component with large buttons for digits 0-9 and a submit button for answer input.

#### T-04: Feedback System
*   **T-04-01: Implement Visual Feedback:** Integrate animations and visual cues, such as confetti for correct answers, to provide engaging feedback.
*   **T-04-02: Implement Audio Feedback:** Incorporate pre-recorded voice prompts and sound effects for instructions, correct/incorrect answers, and positive reinforcement.

#### T-05: Settings and Configuration
*   **T-05-01: Create Settings Interface:** Build the user interface for the parental settings menu, accessible via a simple 4-digit PIN.
*   **T-05-02: Implement Configuration Persistence:** Implement local storage (e.g., using SQLite) to save and load parental settings and configuration. The 4-digit PIN will be stored as plain text.

#### T-06: Progress Tracking
*   **T-06-01: Implement Progress Data Storage:** Set up local storage (e.g., using SQLite) to track progress metrics (total questions, correct/incorrect, accuracy, per-operation stats) for a **single user profile**.
*   **T-06-02: Create Progress Dashboard:** Design and implement the visual dashboard to display the tracked progress statistics and motivational elements for the single user profile.

#### T-07: Testing and Quality Assurance
*   **T-07-01: Implement Unit Tests:** Write unit tests for critical logic, including math operation generation, operand range enforcement, and answer validation.
*   **T-07-02: Implement UI Tests:** Develop UI tests to ensure the numpad interaction, layout responsiveness, and settings persistence function correctly across different screen sizes.
*   **UX Tests:** Conduct testing with the target age group (4-6) under guardian supervision to evaluate usability and feedback comprehension.

#### T-08: Deployment and Packaging
*   **T-08-01: Create Build Pipeline:** Configure the build process to create production-ready desktop application packages.
*   **T-08-02: Create Installation Package:** Generate the final installation package for desktop distribution.

### 5. High-Level Architecture

```mermaid
graph TD
    A[Child User] --> B(User Interface);
    A[Child User] --> C(Numpad Overlay);
    B --> D(Gameplay Logic);
    C --> D(Gameplay Logic);
    D --> E(Math Engine);
    E --> D;
    D --> F(Feedback System);
    F --> B;
    D --> G(Progress Tracking);
    H[Parent/Guardian] --> I(Parental Settings UI);
    I --> J(Configuration Persistence);
    J --> D;
    J --> G;
    G --> I;
    Style A fill:#f9f,stroke:#333,stroke-width:2px;
    Style H fill:#f9f,stroke:#333,stroke-width:2px;
    Style B fill:#ccf,stroke:#333,stroke-width:2px;
    Style C fill:#ccf,stroke:#333,stroke-width:2px;
    Style D fill:#ccf,stroke:#333,stroke-width:2px;
    Style E fill:#bbf,stroke:#333,stroke-width:2px;
    Style F fill:#bbf,stroke:#333,stroke-width:2px;
    Style G fill:#bbf,stroke:#333,stroke-width:2px;
    Style I fill:#ccf,stroke:#333,stroke-width:2px;
    Style J fill:#bbf,stroke:#333,stroke-width:2px;