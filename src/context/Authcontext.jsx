import axios from "axios";
import { createContext, useState } from "react";







export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [accesstoken, setaccesstoken] = useState(null);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(null)


    const login = async (email, password) => {

        setisloading(true);
        seterror(null);

        try {
            const response = await axios.post("/api/login", { email, password });

            const data = response.data
            if (data.accesstoken) {
                setaccesstoken(data.accesstoken);
                setisloading(false);
                setuser(data.user)
            }


        } catch (error) {

            setisloading(false)
            seterror(error)

        } finally {

            setisloading(false)
        }


    }



    const signup = async (username, email, password, zerodhausername) => {
        setisloading(true);
        seterror(null);

        try {
            const response = await axios.post("", {
                username,
                email,
                zerodhausername,
                password
            });
            setisloading(false)

        } catch (error) {
            seterror(error)
            setisloading(false)
        } finally {
            setisloading(false)
        }
    }


    const logout = async () => {

        try {
            await axios.get("/api/auth/logout");
            setuser(null)
        } catch (error) {
            seterror(error)
        }

    }

 return (
    <AuthContext.Provider
      value={{
        user,
        accesstoken,
        isloading,
        error,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}