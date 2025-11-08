
import { createContext, useState } from "react";

import { api } from "../api/axiosInstance";




export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {



    const [user, setuser] = useState(null);
    const [accesstoken, setaccesstoken] = useState(null);
    const [isloading, setisloading] = useState(false);

    const [profiledata, setprofiledata] = useState(null)
    const [holdingsdata, setholdingsdata] = useState(null); // New State
    const [positionsdata, setpositionsdata] = useState(null); // New State
    const [fundsdata, setfundsdata] = useState(null); // New State


    const login = async (email, password) => {
        setisloading(true);
        
        try {
            const response = await api.post("/api/auth/login", { email, password });
            const User = response.data.mes
            const usertoken = response.data.accesstoken

            if (usertoken) {
                setaccesstoken(usertoken);
                setisloading(false);
                localStorage.setItem("user", JSON.stringify(User))
                setuser(User)
                return true;
            }

        } catch (error) {

            setisloading(false)
            console.log(error)
            return error

        } finally {
            setisloading(false)
        }


    }




    const kitelogin = async () => {
        const response = await api.get("/pro/kitelogin")
        console.log(response)
        window.location.href = response.data.url
    }


    const signup = async (username, zerodhausername, email, password,) => {
        setisloading(true);
        seterror(null);

        try {
            const response = await api.post("/api/auth/signup", {
                username,
                zerodhausername,
                email,
                password
            });
            const mes = response.data.mes
            setisloading(false)
            return mes;

        } catch (error) {
            seterror(error)
            setisloading(false)
        } finally {
            setisloading(false)
        }
    }


    const logout = async () => {

        try {
            await api.get("/api/auth/logout");
            setuser(null)
             localStorage.removeItem("user");
        } catch (error) {
            return error
        }

    }

    const getProfile = async () => {
        const response = await api.get("/pro/profile");
        console.log(response.data)
        setprofiledata(response.data);
    }

    const getHoldings = async () => {
        try {
            const response = await api.get("/pro/holdings");
            console.log("Holdings Data:", response.data);
            setholdingsdata(response.data);
        } catch (error) {
            console.error("Error fetching holdings:", error);
            setholdingsdata({ error: error.message });
        }
    }
    

    const getPositions = async () => {
        try {
            const response = await api.get("/pro/positions");
            console.log("Positions Data:", response.data);
            setpositionsdata(response.data);
        } catch (error) {
            console.error("Error fetching positions:", error);
            setpositionsdata({ error: error.message });
        }
    }
    

    const getFunds = async () => {
        try {
            const response = await api.get("/pro/funds");
            console.log("Funds Data:", response.data);
            setfundsdata(response.data);
        } catch (error) {
            console.error("Error fetching funds:", error);
            setfundsdata({ error: error.message });
        }
    }



    return (
        <AuthContext.Provider
            value={{
                user,
                setuser,
                accesstoken,
                isloading,
                login,
                signup,
                logout,

                kitelogin,
                profiledata,
                getProfile,
                holdingsdata,
                getHoldings,
                positionsdata,
                getPositions,
                fundsdata,
                getFunds
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}