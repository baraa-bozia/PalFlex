import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBarLink({to,text}) {
  return (
    
                  <li><NavLink to={to}>{text}</NavLink></li>

    
  )
}
