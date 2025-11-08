import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext';


const Navbar = ({ navigateto, islogout, profile }) => {

    const { user, logout, getProfile, profiledata } = useContext(AuthContext);


    const handlelogout = async (e) => {
        e.preventDefault();
        await logout()
    };

    return (
        <>
            <nav className='text-white bg-black border-b-1px  border-[#f1eaea1e] border-b p-6.5 px-10 sticky top-0 w-full   '>
                <ul className='flex flex-row justify-between'>
                    <li>
                        <h1 className='tracking-widest text-2xl hover:underline'>RAUN</h1>
                    </li>
                    <li>
                        <h1 className='tracking-widest text-blue-400 text-2xl hover:underline'>{profile}</h1>
                    </li>
                    <li>
                        {navigateto ? <Link to={"/" + navigateto} className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl hover:bg-amber-300' >
                            {navigateto}
                        </Link>
                            : <button disabled={islogout} onClick={handlelogout} className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl' >
                                logout</button>}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar