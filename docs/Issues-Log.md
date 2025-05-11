# Issues Log

This document tracks all issues identified during the development of the Kids Maths Wiz project.

## Issue Structure
- **#**: Issue number
- **Time-stamp**: Date and time when the issue was identified
- **Issue Name**: Brief description of the issue
- **Issue Description**: Detailed explanation of the issue
- **Severity**: Importance (1-10, where 10 is highest)
- **Status**: Current status (Open/Closed)
- **Comments**: Additional notes, follow-up actions, or resolution details

## Issues

### #1
**Time-stamp**: 5/12/2025 12:12 AM
**Issue Name**: Tailwind CSS PostCSS Plugin Configuration Error
**Issue Description**: The development server is failing to start due to an error with the Tailwind CSS configuration. The error message indicates that the PostCSS plugin has moved to a separate package and we need to install `@tailwindcss/postcss` and update the PostCSS configuration.
**Severity**: 8
**Status**: Closed
**Comments**: Fixed by installing the `@tailwindcss/postcss` package and updating the postcss.config.js file to use `@tailwindcss/postcss` instead of `tailwindcss` directly.

### #2
**Time-stamp**: 5/12/2025 12:37 AM
**Issue Name**: Unknown Tailwind CSS Utility Class
**Issue Description**: The development server is failing to start due to an error with the Tailwind CSS configuration. The error message indicates that the utility class "border-border" is unknown.
**Severity**: 7
**Status**: Closed
**Comments**: Fixed by replacing the "border-border" utility class with "border-gray-200" in the globals.css file.

### #3
**Time-stamp**: 5/12/2025 12:41 AM
**Issue Name**: Unknown Tailwind CSS Utility Class - border-gray-200
**Issue Description**: The development server is failing to start due to an error with the Tailwind CSS configuration. The error message indicates that the utility class "border-gray-200" is unknown.
**Severity**: 7
**Status**: Closed
**Comments**: Fixed by removing the border utility class completely from the globals.css file.

### #4
**Time-stamp**: 5/12/2025 12:48 AM
**Issue Name**: Unknown Tailwind CSS Utility Class - bg-background
**Issue Description**: The development server is failing to start due to an error with the Tailwind CSS configuration. The error message indicates that the utility class "bg-background" is unknown.
**Severity**: 7
**Status**: Closed
**Comments**: Fixed by replacing the Tailwind CSS utility classes with standard CSS properties in the globals.css file.

### #5
**Time-stamp**: 5/12/2025 12:56 AM
**Issue Name**: Non-functional Buttons
**Issue Description**: None of the operation buttons in the main menu are working. The buttons are properly rendered but don't have any onClick handlers attached to them.
**Severity**: 8
**Status**: Closed
**Comments**: Fixed by implementing onClick handlers for each button and adding navigation to the appropriate operation screens. Created separate screen components for each operation type and implemented navigation between the main menu and operation screens.