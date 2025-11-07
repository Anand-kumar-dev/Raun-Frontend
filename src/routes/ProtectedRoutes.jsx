import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom'




function ProtectedRoutes() {
    const { user ,setuser } = useContext(AuthContext)
    const peruser = localStorage.getItem("user")
    if(!user && peruser) return setuser(peruser)

    return (
        <>
            {user ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}

export default ProtectedRoutes