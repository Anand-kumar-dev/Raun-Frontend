import { use, useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Authcontext"
import Navbar from '../component/Navbar'

function Dashboard() {

    const { user, logout, getProfile, profiledata } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        await logout()
    };

    useEffect(() => {
        const fetchProfile = async () => {
            await getProfile();
        };
        fetchProfile();
    }, []);


    return (
        <>
           <div className="bg-black text-white">
             <Navbar 
             profile={"profile"}
             logout={true} />
            {profiledata ? (
                <div className="text-black text-xl bg-amber-200 rounded p-4">
                    <p><strong>User ID:</strong> {profiledata.user_id}</p>
                    <p><strong>Name:</strong> {profiledata.user_name}</p>
                    <p><strong>Email:</strong> {profiledata.email}</p>
                    <p><strong>Broker:</strong> {profiledata.broker}</p>
                    <p><strong>User Type:</strong> {profiledata.user_type}</p>
                    <p><strong>Exchanges:</strong> {profiledata.exchanges?.join(", ")}</p>
                    <p><strong>Order Types:</strong> {profiledata.order_types?.join(", ")}</p>
                    <p><strong>Products:</strong> {profiledata.products?.join(", ")}</p>
                </div>
            ) : (
                <p className="text-gray-500">Click “Get Profile” to load user data</p>
            )}


            <button onClick={handleClick} className="text-black border-2 p-2 rounder-2xl "> logout</button>
       
           </div>
        </>
    )
}

export default Dashboard