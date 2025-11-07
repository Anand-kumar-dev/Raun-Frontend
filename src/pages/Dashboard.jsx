import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"

function Dashboard() {

    const { user ,logout } = useContext(AuthContext)
   
const handleClick = async(e)=>{
    e.preventDefault();
    await logout()
}

    return (
        <>
        <div>Name : {user.username}</div>
        <div>Name : {user.email}</div>
        <div>Name : {user.zerodhausername}</div>
        <div>Name : {user.password}</div>
        <button onClick={handleClick} className="text-black p-2 rounder-2xl "> logout</button>
        </>
    )
}

export default Dashboard