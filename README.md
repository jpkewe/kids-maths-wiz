<img src="src/assets/images/kids-maths-wiz_logo.png" alt="Kids Maths Wiz Logo" width="25%">

# Kids Maths Wiz

## Secure, Offline Math Learning App for Young Children

**Platform:** Desktop
**Target Audience:** Children aged 4–6
**Deployment Mode:** Offline-Only

## Purpose

Kids Maths Wiz is a secure, offline math learning app designed for young children aged 4–6. It focuses on basic arithmetic to improve number recognition, operational understanding, and cognitive math skills through interactive learning. A key feature is parental customization of difficulty levels.

## Scope

The app provides:
- Core arithmetic problem-solving (addition, subtraction, multiplication, division).
- Parental customization of difficulty (operand ranges and operations).
- Progress tracking with visual stats (locally stored).
- Input-based interaction using a child-friendly numpad.
- Motivating feedback using voice, animations, and sound effects.
- No network dependency or external data usage.

## Features

### Main Menu
- Four large, colorful buttons for Addition, Subtraction, Multiplication, and Division.
- An optional fifth button for Random Mode, which randomizes operations based on parental settings.

### Gameplay Mechanics
- Randomly generated arithmetic problems based on selected operation and quantity range.
- Problems can contain 2 to 4 operands (configurable).
- Operand values are generated from configurable ranges (0–10, 0–20, 0–30, 30–50, 50–100).
- Answers are unrestricted.
- Layout includes a large expression display, a large answer input field, and a full-screen numpad overlay for input.

### Feedback System
- **Correct Answer:** Confetti animation and positive audio feedback ("Hooray! You got the right answer!").
- **Incorrect Answer:** Calm alert tone and encouraging voice feedback ("Oops! Not quite. Try again!").
- The system is designed to be supportive with no penalties.

### Progress Tracking
- Locally tracked per child profile (optional).
- Records total questions answered, correct/incorrect counts, and accuracy percentage.
- Provides a visual dashboard with stars, badges, progress bars, and motivational messages.

### Parental Settings
- Accessible via a password-protected menu.
- Allows enabling/disabling individual operations, toggling Random Mode, setting operand quantity ranges per operation, configuring the number of operands per question (2, 3, or 4), and controlling audio (music, sound effects, voice feedback).
- Provides options to view and reset progress stats.

### Audio and Voice
- Includes a startup audio message ("Welcome to your Maths Lessons!").
- Uses voice prompts for instructions, feedback, and positive reinforcement.
- Features optional calm background music.

## Non-Functional Requirements

### Usability
- Designed for pre-literate users with icon-based UI, minimal text, and large tappable elements.
- Specifies minimum font sizes for questions and input fields.

### Accessibility
- Color contrast compliant with simple color themes.
- Provides voice-only prompts for non-readers.

### Performance
- Aims for app startup under 2 seconds and instant response to input.
- Designed to work on entry-level Android devices (Android 8.0+).

### Security
- Operates fully offline with no data transmission or external services.
- Parental controls are secured with a PIN.

## Optional/Nice-to-Have Features
- Sandbox Mode for child-led expression creation.
- Rewards System with achievements and unlockables.
- Support for Multiple Profiles.
- Optional Daily Encouragement notifications.

## UI/UX Design Guidelines
- Specifies guidelines for main buttons, input field, numpad, feedback animations, and settings access.

## Technical Notes
- **Preferred Stack:** React, TypeScript, Tailwind CSS, Shadcn, SQLite, etc.
- **Audio Assets:** Pre-recorded using a slow, clear voice.
- **Math Engine:** Uses seeded random generation, configured operand bounds, and computes/compares results.

## Testing Requirements
- Includes requirements for Unit Tests (operation logic, range enforcement, validation), UI Tests (numpad, settings), and UX Tests (with target audience).

## Milestones
- M1: App skeleton, operation logic
- M2: Operand range config + UI
- M3: Input field + Numpad overlay
- M4: Voice + feedback system
- M5: Progress tracking + parent settings
- M6: QA + user testing (kids + parents)
- M7: Build packaging + deployment

## Getting Started

To run this project locally:

1. Clone the repository.
2. Ensure you have Node.js and npm installed.
3. Navigate to the project directory in your terminal.
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`
6. Open your browser to the address provided in the terminal (usually `http://localhost:5173`).

## Work In Progress

This is a simple work-in-progress app that will be improved on and evolved overtime. I built this to help my four year old son learn basic arithmatic, so it may be useful to other parents. The next step is to package the app for desktop installation.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
