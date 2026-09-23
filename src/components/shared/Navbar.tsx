import React from 'react';
import NavLOgo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
  <div>
  <div className=" navbar bg-base-100 shadow-sm px-4 lg:px-8">
    
    {/* Left - Logo */}
    <div className="navbar-start">
    <Image src={NavLOgo} alt="nab-logo" className='h-[60px] w-[60px]'/>
    
    </div>

    {/* Center - Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        <li className='font-semibold hover:text-blue-400'>
          <Link href="/">Home</Link>
        </li>
        <li className='font-semibold hover:text-blue-400'>
          <Link href="/apps">Apps</Link>
        </li>
        <li className='font-semibold hover:text-blue-400'>
          <Link href="/Installation">Installation</Link>
        </li>
      
      </ul>
    </div>

    {/* Right - Button */}
    <div className="navbar-end">
      <button className="btn btn-secondary">Contribute</button>
    </div>

  </div>
</div>
  );
};

export default Navbar;