import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({navigateto}) => {
    return (
        <>
            <nav className='text-white  border-b-1px  border-[#f1eaea1e] border-b p-6.5 px-10 sticky top-0 w-full   '>
                <ul className='flex flex-row justify-between'>
                    <li>
                        <h1 className='tracking-widest text-2xl hover:underline'>RAUN</h1>
                    </li>
                    <li>
                        <button className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl '>
                            <Link to={"/"+navigateto} className='hover:bg-[#1f1f1f]' >
                                {navigateto}
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar