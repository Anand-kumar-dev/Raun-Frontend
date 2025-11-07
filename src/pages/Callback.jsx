import { useEffect } from "react";
import { api } from "../api/axiosInstance"; 
import { useNavigate } from "react-router-dom";

export default function KiteCallback() {
    const navigate = useNavigate()
    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const request_token = urlParams.get("request_token");
        const state = urlParams.get("state");

        console.log("Request Token from Zerodha:", request_token);
        console.log("State Token:", state);

        if (request_token && state) {
            const response = api.get(`/pro/callback?request_token=${request_token}&state=${state}`)
                .then(() => {
                    navigate("/dashboard", { replace: true });
             })
                .catch(err => console.error(err));
        }
    }, []);

    return <div>Logging in to Kite...</div>;
}
