import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
        <NavLink to={'/computing'} className={({isActive})=> isActive? "active-link" : ""}>Computing</NavLink>
        <NavLink to={'/audio'} className={({isActive})=> isActive? "active-link" : ""}>Audio</NavLink>
        <NavLink to={'/camera'} className={({isActive})=> isActive? "active-link" : ""}>Camera</NavLink>
    </nav>
  )
}

export default Navbar