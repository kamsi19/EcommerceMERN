import React from 'react'


const Navbar = () => {
  return (
    <nav className='bg-tertiary py-9 ring-1 ring-slate-900/5 relative flex items-center'>
        <div className='mx-auto max-w-[1440px] px-6 lg:px-20 flexBetween'>

            <div className='hidden sm:flex uppercase bold-22 text-white px-9 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1'>TRUSTELECTRONICS ABC Admin Panel</div>
            
        </div>
    </nav>
  )
}

export default Navbar