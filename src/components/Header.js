import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className="header">
            <NavLink to="/" className="NavLink">Student Record Management System</NavLink>            
        </div>


        </>
    )
}

export default Header
