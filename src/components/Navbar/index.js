import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>LOGO</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Resumé
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Gallery 
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Contact 
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;