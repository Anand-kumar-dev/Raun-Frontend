import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"

function Dashboard() {

    const { user } = useContext(AuthContext)
    
    return (
        <>
        <div>dashboard</div>
        </>
    )
}

export default Dashboard