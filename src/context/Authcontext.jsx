
import { createContext, useState } from "react";

import { api } from "../api/axiosInstance";




export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {



    const [user, setuser] = useState(null);
    const [accesstoken, setaccesstoken] = useState(null);
    const [isloading, setisloading] = useState(false);
    const [error, seterror] = useState(null)

    const [profiledata , setprofiledata] = useState(null) 



    const login = async (email, password) => {

        setisloading(true);
        seterror(null);

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
            seterror(error.response?.data?.message || error.message);
            console.log(error)
            return false

        } finally {

            setisloading(false)
        }


    }


   const kitelogin = async()=>{
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
        } catch (error) {
            seterror(error)
        }

    }

  const getProfile = async ()=>{
   const response =  await api.get("/pro/profile");
   console.log(response.data)
      setprofiledata(response.data);
  }

    return (
        <AuthContext.Provider
            value={{
                user,
                setuser,
                accesstoken,
                isloading,
                error,
                login,
                signup,
                logout,
                kitelogin,
                profiledata,
                getProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}