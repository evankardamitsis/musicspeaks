import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex flex-row justify-between items-center'>
        
            <Logo />
            <div className='flex flex-col justify-end'>
                <ul className='flex flex-row'>
                   <Link href='/services'><li className='px-4 text-pinky text-xl font-main'>Services</li></Link>
                   <Link href='/about'><li className='px-4 text-pinky text-xl font-main '>About</li></Link>
                   <Link href='/projects'><li className='px-4 text-pinky text-xl font-main'>Projects</li></Link>
                    <Link href='/contact'><li className='px-4 text-pinky text-xl font-main'>Contact</li></Link>
                </ul>
            </div>
      
    </nav>
  )
}

export default Header