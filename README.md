# Message Service Project

A simple Node.js and Express application for displaying and managing messages. The project includes a front-end built with HTML, Bootstrap, and jQuery to interact with the back-end API.

---

## Features

### Backend
- Serve an HTML file with a simple messaging interface.
- API to fetch predefined messages (`/messages` route).
- Lightweight and efficient implementation using **Express**.

### Frontend
- Dynamically display messages retrieved from the backend.
- Add new messages to the display (local-only functionality).
- Use Bootstrap for styling and jQuery for AJAX requests.

---

## Technologies Used
- **Node.js**
- **Express**
- **Bootstrap** (for UI design)
- **jQuery** (for AJAX and DOM manipulation)

---

## Getting Started

### Prerequisites
Ensure you have **Node.js** installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Jaweria-B/message-service
   cd message-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```
   For development with automatic restarts, use:
   ```bash
   npm run dev
   ```
   *(Requires [nodemon](https://www.npmjs.com/package/nodemon) to be installed)*

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## File Structure
- **`app.js`**: Server-side logic using Express.
- **`index.html`**: Front-end interface for sending and displaying messages.
- **`package.json`**: Project dependencies and scripts.

---

## Future Improvements
- Implement POST requests to add new messages to the server.
- Persist messages using a database (e.g., MongoDB or SQLite).
- Add user authentication for a personalized experience.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments
- Inspired by basic messaging applications.
- Built with love for learning and exploring Node.js and Express.
