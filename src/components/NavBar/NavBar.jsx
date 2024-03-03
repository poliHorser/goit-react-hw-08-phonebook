import { Link } from "react-router-dom";

import MainMenu from "../MainMenu/MainMenu";
import NavBarAuth from '../NavBarAuth/NavBarAuth'
import NavBarUser from "../NavBaUser/NavBarUser"
import "./NavBar.css"
const NavBar = () => {
    const isLogin = false
    return (
        <navbar className='navbar'>
            <Link to ="/"> Logo
            </Link>
            <MainMenu />

            {isLogin ? <NavBarUser /> : <NavBarAuth />}
        </navbar>
    )
}

export default NavBar

