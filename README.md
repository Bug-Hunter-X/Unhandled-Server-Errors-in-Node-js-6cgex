# Unhandled Server Errors in Node.js

This repository demonstrates a common error in Node.js server development: unhandled errors causing server crashes without informative logging. The `server.js` file shows the problematic code, while `serverSolution.js` provides a corrected version with proper error handling.

## Problem

The initial server implementation lacks error handling. If any errors occur during the server's operation (e.g., network issues, unexpected request data), the server will crash without logging details. This makes debugging extremely difficult.

## Solution

The solution involves adding an `'error'` event listener to the HTTP server. This listener captures any errors that occur, logs them to the console, and allows the server to continue running gracefully.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node server.js` (for the problematic code) or `node serverSolution.js` (for the corrected code).
4. Observe the server's behavior and console output.