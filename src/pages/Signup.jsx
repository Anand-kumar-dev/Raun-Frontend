
import Input from '../component/Input'
import { Loader, Lock, Mail, ShieldUser, User } from 'lucide-react'
import Navbar from '../component/Navbar'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext'
import { toast } from 'sonner'


function Signup() {

  const { signup, isloading  } = useContext(AuthContext)

  const [username, setusername] = useState("")
  const [zerodhausername, setzerodhausername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [succes , setsucces] = useState("")
  const [error , seterror] = useState("")


  const handleform = async (e) => {
    e.preventDefault();
try {
     const res = await signup(username,zerodhausername,email,password);
      if(res){ 
        toast("signup successfull")
        return setsucces(res);}
} catch (error) {
  seterror(error.response?.data?.message || error.message)
}
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
              placeholder={'Username'}
              onChange={(e) => setusername(e.target.value)}
              value={username}
            />
            <Input
              type={'text'}
              id={'zerousername'}
              Icon={ShieldUser}
              placeholder={'Zerodha username'}
              onChange={(e) => setzerodhausername(e.target.value)}
              value={zerodhausername}
            />
            <Input
              type={'email'}
              id={'email'}
              Icon={Mail}
              placeholder={'Email Address'}
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <Input
              type={'password'}
              id={'Password'}
              Icon={Lock}
              placeholder={'Password'}
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />

            <hr className='border-white h-0 m-2 border-t border-opacity-20 w-full' />

            <button
              disabled={isloading}
              type="submit"
              className=' mt-3 text-xl p-3 bg-[#B8C4A9] rounded-xl text-black hover:text-[#0eafcf] text-center'>
              {isloading ? <Loader className='animation-spin size-5' /> : "Submit"}
            </button>

            {error &&
              <p className='p-1.2 text-red-500 text-center mt-2'>
                {error} || something went wrong</p>}

            {succes && 
                <p className='text-green-500 text-center mt-2 p-1.2'>
                  {succes}</p>}


          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

