import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <nav className='flex flex-row justify-between'>
        <div className='flex flex-row'>
            <Logo />
            <div className='flex flex-col justify-end'>
                <ul className='flex flex-row'>
                    <li className='px-4'>Services</li>
                    <li className='px-4'>About</li>
                    <li className='px-4'>Projects</li>
                    <li className='px-4'>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header