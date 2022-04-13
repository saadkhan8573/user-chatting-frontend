import React, { useState } from 'react'
import { navData } from './NavItems'
import { Wrapper } from './style'
import { NavLink,useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
    const navigate = useNavigate();
    const [showNavBar, setShowNavBar] = useState(false)

    const logout = () => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <>
            <Wrapper translate={showNavBar ? '0%' : '-100%'} hamburgerColor={showNavBar ? 'black' : 'white'}>
                <NavLink to="/" className="logo">
                    <img src="https://img.favpng.com/6/10/13/livechat-online-chat-logo-computer-icons-png-favpng-TxWNEJkvmUpCitimFEKtUvfhb.jpg" alt="Logo" />
                    <span>Todds Group</span>
                </NavLink>
                <ul className={showNavBar ? 'mobile-navItems' : 'navItems'}>
                    {
                        navData.map(item => (
                            <li key={item.elem}><NavLink to={item.to}>{item.elem}</NavLink></li>
                        ))
                    }
                    <li onClick={logout} style={{color : 'white',cursor : 'pointer'}}>Logout</li>
                </ul>
                <div className='hamburger'>
                    <GiHamburgerMenu onClick={() => setShowNavBar(!showNavBar)} />
                </div>
            </Wrapper>
        </>
    )
}