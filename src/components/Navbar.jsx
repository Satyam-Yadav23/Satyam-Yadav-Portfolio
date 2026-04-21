import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100 py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href='#' className='flex items-center gap-2 text-2xl font-semibold'>
                    <span className='text-white'>Satyam</span>
                    <span className='text-purple'>Yadav</span>
                    <div className='w-4 h-4 bg-purple rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                
                
                <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href='#education' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Education</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href='#projects' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

            </div>

            {/* mobile button */}
            <div className='md:hidden'> 
                {
                    showMenu ? 
                    <FaXmark className='text-2xl cursor-pointer text-white hover:text-purple transition-colors duration-300' onClick={() => setShowMenu(!showMenu)}/>
                    :
                    <FaBars className='text-2xl cursor-pointer text-white hover:text-purple transition-colors duration-300' onClick={() => setShowMenu(!showMenu)}/>

                }
            </div>
        </div>
        {/* Mobile Menus */}
        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-200 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={() => setShowMenu(!showMenu)} href='#home' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>Home</span>
                    </a>
                 
                    <a onClick={() => setShowMenu(!showMenu)} href='#about' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>About</span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href='#education' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>Education</span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href='#skills' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>Skills</span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href='#projects' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>Projects</span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href='#contact' className='block rounded-md px-4 py-2 text-white transition duration-300 hover:text-purple hover:bg-dark-300'>
                        <span>Contact</span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar