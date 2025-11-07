import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom'




function ProtectedRoutes() {
    const { user } = useContext(AuthContext)
    return (
        <>
            {user ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}

export default ProtectedRoutes