import React from 'react'

const Input = ({ Icon, ...props }) => {
    return (
        <>
            <div className=' bg-[#1f1f1f] border border-black focus-within:border-[#68f8f8] text-xl focus:border-blue-400 flex gap-3 items-center p-5 w-sm rounded-2xl transition-all'>
                <Icon className='size-5 text-gray-400  group-focus-within:text-blue-400 ' />
                <input
                autoComplete='off'
                    {...props}
                    className='text-2xl bg-transparent outline-0 w-full focus:border-black focus:border-0'
                />

            </div>
        </>
    )
}

export default Input