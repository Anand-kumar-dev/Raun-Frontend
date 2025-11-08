
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

