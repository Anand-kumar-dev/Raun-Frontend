
# Raun Frontend - Trading Dashboard

<img width="1364" height="629" alt="image" src="https://github.com/user-attachments/assets/aa4251ef-6abe-4c79-9df6-a3b0c440f1b6" />


<img width="1363" height="619" alt="image" src="https://github.com/user-attachments/assets/84c5e64b-a7f7-40cb-b8bc-c566bb72597a" />


<img width="1361" height="638" alt="image" src="https://github.com/user-attachments/assets/17fc1fb6-0639-4be6-92b5-ea57f22c7191" />


<img width="1350" height="625" alt="image" src="https://github.com/user-attachments/assets/5d80369b-7180-4e26-9261-1fc6760106da" />


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



