
import Input from '../component/Input'
import { Lock, Mail, ShieldUser, User } from 'lucide-react'
import Navbar from '../component/Navbar'
import { useState } from 'react'


function Signup() {

    const [username , setusername] = useState(null)
    const [zerodhausername , setzerodhausername] = useState(null)
    const [email , setemail] = useState(null)
    const [password , setpassword] = useState(null)

   
  const handleform =(e)=>{
    e.preventDefault();
    console.log(username , password , zerodhausername , email)

    setemail("")
    setpassword("")
    setusername("")
    setzerodhausername("")
  }



  return (
    <div className='bg-black w-screen min-h-screen font-[Alan Sans] ' >
      <Navbar 
      navigateto={'login'}
      />

      <div className='flex justify-center items-center '>
        <div className='mt-10 m-5 static border-2 border-[#f1eaea1e] bg-[hsl(0deg_0%_3.92%)] p-2  rounded-xl w-4xl flex flex-col  justify-center items-center text-white'>
          <h1 className='p-5 text-4xl'>Start Trading with Next-Level <span className='bg-[#68f8f8] p-1.5 rounded-xl text-black'>Intelligence</span></h1>
          <form onSubmit={handleform} className='flex flex-col gap-5 justify-center items-center' >
            <Input 
            type={'text'}
            id={'username'}
            Icon={User}
            Placeholder={'Username'} 
            onChange={(e)=>setusername(e.target.value)}
            value={username}
            />
            <Input 
            type={'text'}
            id={'zerousername'}
            Icon={ShieldUser}
            Placeholder={'Zerodha username'} 
            onChange={(e)=>setzerodhausername(e.target.value)}
            value={zerodhausername}
            />
            <Input 
            type={'email'}
            id={'email'}
            Icon={Mail}
            Placeholder={'Email Address'} 
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            />
            <Input 
            type={'password'}
            id={'Password'}
            Icon={Lock} 
            Placeholder={'Password'} 
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
            />
            
                        <hr className='border-white h-0 m-2 border-t border-opacity-20 w-full' />
 

            <button type="submit" className=' mt-3 text-xl p-3 bg-[#B8C4A9] rounded-xl text-black hover:text-[#0eafcf] text-center'>Submit</button>




          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

