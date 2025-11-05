import React from 'react'
import { Outlet } from 'react-router-dom'

function Authlayout() {
  return (
    <div className='overflow-x-hidden'>
        <Outlet/>
    </div>
  )
}

export default Authlayout