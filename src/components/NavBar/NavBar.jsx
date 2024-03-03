import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MainMenu from "../MainMenu/MainMenu";
import NavBarAuth from '../NavBarAuth/NavBarAuth'
import NavBarUser from "../NavBaUser/NavBarUser"
import "./NavBar.css"

import { selectIsLogin } from "../../redux/auth/auth-selectors";

const NavBar = () => {
    const isLogin = useSelector(selectIsLogin);
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

