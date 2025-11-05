import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
     <div className='bg-black w-screen min-h-screen font-[Alan Sans] ' >
      <nav className='text-white p-6.5 px-10 sticky bg-black z-10 overflow-hidden top-0 w-full  border-b-1px  border-[#f1eaea1e] border-b'>
        <ul className='flex flex-row justify-between'>
          <li><h1 className='tracking-widest text-2xl hover:underline'>RAUN</h1></li>
          <li><button className='bg-[#1f1f1f] text-lg px-4 border border-white p-2 rounded-xl '> <Link to="/" className='hover:bg-[#1f1f1f]' >Login</Link></button></li>
        </ul>
      </nav>
      <div className='flex justify-center items-center '>
<div className='mt-10 m-5 static border-2 border-[#f1eaea1e] bg-[hsl(0deg_0%_3.92%)] p-2  rounded-xl w-4xl flex flex-col  justify-center items-center text-white'>        <h1 className='p-5 text-4xl'>Personalized only for you</h1>
        <form className='flex flex-col justify-center items-center' >
          <div className='m-3 flex flex-col '>
            <label className='p-3 text-xl' htmlFor='username'>Name</label>
            <input id='username' className='bg-[#1f1f1f] text-xl rounded-2xl py-2 px-5' type="text" />
          </div>
          <hr className='border-0 bg-white h-px'/>
          <div className='m-3 flex flex-col'>
            <label className='p-3 text-xl' htmlFor='username'>Email</label>
            <input id='username' className='bg-[#1f1f1f] text-xl rounded-2xl py-2 px-5' type="text" />
          </div>
          <hr className='border-0 bg-white h-px'/>
          <div className='m-3 flex flex-col'>
            <label className='p-3 text-xl' htmlFor='username'>Zerodha username</label>
            <input id='username' className='bg-[#1f1f1f] text-xl rounded-2xl py-2 px-5' type="text" />
          </div>
          <hr className='border-0 bg-white h-px'/>
          <div className='m-3 flex flex-col'>
            <label className='p-3 text-xl' htmlFor='username'>Password</label>
            <input id='username' className='bg-[#1f1f1f] text-xl rounded-2xl py-2 px-5' type="text" />
          </div>
         
        <button type="submit" className='text-xl p-3 bg-[#B8C4A9] rounded-xl text-black hover:text-[#0eafcf] text-center'>Submit</button>
        
         
          
         
        </form>
      </div>
      </div>
    </div>
  )
}

export default Signup