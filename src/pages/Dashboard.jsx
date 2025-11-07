import { use, useContext, useState } from "react"
import { AuthContext } from "../context/Authcontext"

function Dashboard() {

    const { user, logout, getProfile } = useContext(AuthContext);

    const [profile, setprofile] = useState("")

    const handleClick = async (e) => {
        e.preventDefault();
        await logout()
    };

    const handleprofile = async (e) => {
        e.preventDefault()
        const profiledata = await getProfile();
        setprofile(profiledata);
        console.log(profile)
    }
    return (
        <>

            <div className="text-black text-xl bg-amber-200 rounder">{profile.email}</div>
            <button className="text-2xl text-black p-2 border-2" onClick={handleprofile}>Click for profile</button>

            <button onClick={handleClick} className="text-black border-2 p-2 rounder-2xl "> logout</button>
        </>
    )
}

export default Dashboard