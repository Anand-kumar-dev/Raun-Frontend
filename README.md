# Raun Backend - The Engine Room

This is the Node.js/Express backend that powers the Raun application. It's built to securely manage user authentication and act as a reliable gateway for fetching real-time trading data using the Zerodha Kite Connect API.

My goal here was to create a robust, modular, and secure API layer so the frontend can focus purely on presentation.

### Prerequisites

You'll need Node.js and a MongoDB instance (local or hosted, like MongoDB Atlas) for persistent storage.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Raun-Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or 
    # bun install 
    ```

3.  **Environment Variables:**
    Create a file named `.env` in the root directory and add the following variables.

    | Variable | Description | Source |
    | :--- | :--- | :--- |
    | `PORT` | The port the server will run on (e.g., `3000`). | |
    | `MONGODB_URI` | Your MongoDB connection string. | |
    | `JWT_SECRET` | A long, complex string for signing JWT access tokens. | |
    | `ZERODHA_API_KEY` | Your personal Zerodha Kite API Key. | |
    | `ZERODHA_API_SECRET` | Your personal Zerodha Kite API Secret. | |

4.  **Start the server:**
    ```bash
    # Assuming you have nodemon for development, or just use node
    node server.js
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:3000`).

##  Tech Stack & Architecture

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB via Mongoose ORM
* **Authentication:** JWT with `cookie-parser` for secure, HTTP-only cookie management. Passwords are secured using `bcrypt`.
* **Trading API:** Integrated using the official `kiteconnect` library.

##  Key Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Register a new user. |
| `POST` | `/api/auth/login` | Log in and receive an `accessToken` cookie. |
| `GET` | `/api/auth/logout` | Clear the session cookie and log out. |

### Zerodha Trading Data (`/pro`)

These endpoints handle the trading account connection and data retrieval. Most of the data endpoints are protected by the `verifyToken` middleware.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/pro/kitelogin` | Initiates the redirection for the Zerodha login flow. |
| `GET` | `/pro/callback` | Handles the OAuth callback from Zerodha, exchanges the `request_token` for an `access_token`. |
| `GET` | `/pro/profile` | Fetches the user's trading profile details. |
| `GET` | `/pro/holdings` | Retrieves current stock holdings. |
| `GET` | `/pro/positions` | Retrieves live positions data. |
| `GET` | `/pro/funds` | Fetches margin/funds data (equity margins). |

---

## 2. Frontend: `README.md` (for the `Raun-Frontend` folder)

```markdown
# Raun Frontend - Trading Dashboard

This is the user-facing application for Raun, a modern trading dashboard built using React and styled with Tailwind CSS. It connects to the custom Node.js backend to provide an authenticated, single-page experience for viewing key trading data from Zerodha Kite.

The entire application state, especially for user authentication and trading data, is managed via React's Context API.

##  Features

* **User Authentication:** Full Login and Signup flow integrated with the backend API.
* **Protected Routing:** Ensures unauthorized users cannot access the trading `Dashboard`.
* **Zerodha Kite Integration:** Handles the full OAuth flow, redirecting the user for login and processing the callback to establish a trading session.
* **Dynamic Dashboard:** Displays four key sections of trading data:
    * User Profile
    * Holdings
    * Positions (Net)
    * Funds (Available and Utilised Margin)

##  Tech Stack

* **Frontend Library:** React (using functional components and Hooks)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (for rapid utility-first development)
* **Routing:** `react-router-dom`
* **API Client:** `axios` configured for requests to `http://localhost:3000` with credentials.

##  Local Development

1.  **Ensure the Backend is Running:**
    The frontend is configured to communicate with the backend running at `http://localhost:3000`. Make sure you have the [Raun Backend](#raun-backend---the-engine-room) set up and running first.

2.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Raun-Frontend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # bun install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app should now be available at `http://localhost:5173`.
