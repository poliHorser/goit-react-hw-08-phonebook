// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MainMenu from "../MainMenu/MainMenu";
import NavBarUser from "../NavBaUser/NavBarUser"
import "./NavBar.css"

import { selectIsLogin } from "../../redux/auth/auth-selectors";

const NavBar = () => {
    const isLogin = useSelector(selectIsLogin);
    return (
        <navbar className='navbar' >
            

            {isLogin ? <NavBarUser /> : <MainMenu />}
        </navbar>
    )
}

export default NavBar

