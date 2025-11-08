import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext';
import { toast } from 'sonner';


const Navbar = ({ navigateto, islogout, profiledata }) => {



    const { user, logout, getProfile, setaccesstoken  } = useContext(AuthContext);
    const [error , seterror] = useState("")

    const handlelogout = async (e) => {
      try {
          e.preventDefault();
          await logout()
          setaccesstoken(null)
      } catch (error) {
        toast.error(error)
        seterror(error)
      }
    };

    return (
        <>
            <nav className='text-white bg-black border-b-1px  border-[#f1eaea1e] border-b p-6.5 px-10 sticky top-0 w-full   '>
                <ul className='flex flex-row justify-between'>
                    <li>
                        <h1 className='tracking-widest text-2xl hover:underline'>RAUN</h1>
                    </li>
                    <li>
                        <h1 className='tracking-widest text-blue-400 text-2xl hover:underline'>{profiledata}</h1>
                    </li>
                    <li>
                        {navigateto ? <Link to={"/" + navigateto} className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl hover:bg-amber-300' >
                            {navigateto}
                        </Link>
                            : <button disabled={islogout} onClick={handlelogout} className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl' >
                                logout</button>}
                    </li>
                </ul>
                {error ? <p className='text-white text-2xl'>error</p> : null}
            </nav>
        </>
    )
}

export default Navbar