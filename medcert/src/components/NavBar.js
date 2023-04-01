import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai"

function NavBar() {

  return (
    <nav className='w-full px-8 py-4 flex items-center justify-between border-b'>
      <h1 className='text-3xl'>MEDCERT ®</h1>
      <div className='flex gap-6 items-center'>
        <p className='text-xl'>About Us</p>
        <button className='p-2 bg-gray-200 text-xl rounded-xl '>Sign Up/Log In</button>
        <AiOutlineQuestionCircle className='text-2xl' />
      </div>
    </nav>
  )
}

export default NavBar;
