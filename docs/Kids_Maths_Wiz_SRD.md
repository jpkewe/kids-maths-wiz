# Software Requirements Document (SRD)
## App Name: Kids Maths Wiz
## Platform: Desktop
## Target Audience: Children aged 4–6
## Deployment Mode: Offline-Only

---

## 1. Purpose

To develop a secure, offline math learning app for young children aged 4–6, focusing on basic arithmetic. The app aims to improve number recognition, operational understanding, and cognitive math skills through interactive learning and parental customization of difficulty.

---

## 2. Scope

The app provides:
- Core arithmetic problem-solving (addition, subtraction, multiplication, division).
- Parental customization of difficulty (operand ranges and operations).
- Progress tracking with visual stats.
- Input-based interaction using a child-friendly numpad.
- Motivating feedback using voice, animations, and sound effects.
- No network dependency or external data usage.

---

## 3. Functional Requirements

### 3.1. User Roles
- **Child User**: Engages with math problems using simple touch interaction and audio feedback.
- **Parent/Guardian**: Customizes learning configuration and reviews child performance.

### 3.2. Core Features

#### 3.2.1. Main Menu
- Four large, colorful buttons for:
  - ➕ Addition
  - ➖ Subtraction
  - ✖️ Multiplication
  - ➗ Division
- A fifth button (if enabled in Settings): **🔀 Random Mode**
  - Randomly selects operations from those configured in Settings.

#### 3.2.2. Gameplay Mechanics
- Randomly generated arithmetic problems based on selected operation and quantity range.
- Problems may contain 2 to 4 operands (configurable).
- **Operand values** are generated from the selected range:
  - 0–10
  - 0–20
  - 0–30
  - 30–50
  - 50–100
- **Answers** are unrestricted and may fall outside the operand range.
- Layout:
  - Expression displayed in large, bold font.
  - Below the expression is a **large answer input field**.
  - On tap, a full-screen **numpad overlay** appears with digits 0–9 and a submit button.
  - Feedback is given after submitting an answer.

#### 3.2.3. Feedback System
- **Correct Answer**:
  - Confetti animation.
  - Audio: *“Hooray! You got the right answer!”*
- **Incorrect Answer**:
  - Calm alert tone.
  - Voice: *“Oops! Not quite. Try again!”*
- No penalties — always supportive messaging.

#### 3.2.4. Progress Tracking
Tracked **locally** per child profile (optional):
- Total questions answered.
- Total correct and incorrect.
- Accuracy percentage (`Correct / Total × 100%`).
- Per-operation performance breakdown.
- Visual dashboard with:
  - Stars, badges, and progress bars.
  - Motivational messages (e.g., “Wow! 80% correct today!”).

#### 3.2.5. Parental Settings
Accessed via **Password-protected menu**.

##### Settings Include:
- **Operations** (Checkboxes):
  - Enable/disable ➕ ➖ ✖️ ➗ individually.
- **Random Mode** (Switch):
  - ON → randomize between selected operations.
- **Operand Quantity Ranges** per operation:
  - Each operation has a dropdown or segmented control with:
    - 0–10
    - 0–20
    - 0–30
    - 30–50
    - 50–100  
  - These ranges apply **only to operand values**, **not the result**.
- **Complexity**:
  - Number of operands per question: 2, 3, or 4.
- **Audio Controls**:
  - Toggle for music, sound effects, and voice feedback.
- **Progress Controls**:
  - View detailed stats.
  - Reset progress.

#### 3.2.6. Audio and Voice
- **Startup Audio**: “Welcome to your Maths Lessons!”
- Voice prompts used for:
  - Instructions.
  - Correct/Incorrect feedback.
  - Positive reinforcement.
- Optional calm background music.

---

## 4. Non-Functional Requirements

### 4.1. Usability
- Designed for pre-literate users:
  - Icon-based UI
  - Minimal text
  - Large tappable elements (minimum 60x60dp)
- Font sizes:
  - Question: ≥ 32sp
  - Input: ≥ 28sp

### 4.2. Accessibility
- Color contrast compliant.
- Simple color themes.
- Voice-only prompts for children who can’t read yet.

### 4.3. Performance
- App startup < 2 seconds.
- Instant response to input.
- Works on entry-level Android phones/tablets (Android 8.0+).

### 4.4. Security
- No data transmission.
- No external services.
- PIN-secured parental controls.
- Fully offline operation.

---

## 5. Optional/Nice-to-Have Features

### 5.1. Sandbox Mode
- Drag-and-drop builder for child-led expression creation.
- Real-time evaluation with voice feedback.

### 5.2. Rewards System
- Achievements (e.g., “5 in a row correct!”).
- Unlockable characters or themes.

### 5.3. Multiple Profiles
- Support for managing multiple children.
- Each with independent progress stats.

### 5.4. Daily Encouragement
- Optional notification system (local, parent-enabled).
- Daily audio prompt: *“Let’s play some maths today!”*

---

## 6. UI/UX Design Guidelines

| Element | Guidelines |
|--------|------------|
| Main Buttons | Icon-based, vibrant color, 60–100dp |
| Input Field | Centered, ~64dp height, touch-optimized |
| Numpad | Fullscreen overlay, large buttons (80–100dp) |
| Feedback | Smooth, friendly animations |
| Settings | Accessible only via 4-digit PIN |

---

## 7. Technical Notes

- **Preferred Stack**:
  - React, TypeScript, Tailwind CSS, Shadcn, SQLite, etc.
- **Audio Assets**:
  - Pre-recorded using slow, clear voice for children.
- **Math Engine**:
  - Uses seeded random generation.
  - Operand bounds configured per operation.
  - Result computed and compared after input.

---

## 8. Testing Requirements

### Unit Tests
- Operation generation logic.
- Operand range enforcement.
- Answer validation.

### UI Tests
- Numpad interaction and layout on various screen sizes.
- Settings persistence and reset.

### UX Tests
- Tested with children 4–6 (with guardian supervision).
- Feedback comprehension.

---

## 9. Milestones

| Milestone | Description | 
|----------|-------------|
| M1 | App skeleton, operation logic 
| M2 | Operand range config + UI 
| M3 | Input field + Numpad overlay 
| M4 | Voice + feedback system 
| M5 | Progress tracking + parent settings 
| M6 | QA + user testing (kids + parents) 
| M7 | Build packaging + deployment 
