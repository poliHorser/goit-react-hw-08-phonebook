// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MainMenu from "../MainMenu/MainMenu";
import NavBarUser from "../NavBaUser/NavBarUser"
import "./NavBar.css"
import img from "../../img/phone.png"
import { selectIsLogin } from "../../redux/auth/auth-selectors";

const NavBar = () => {
    const isLogin = useSelector(selectIsLogin);
    return (
        <navbar className='navbar' >
            
            <img className="img-ph" src={img} alt="" />
            {isLogin ? <NavBarUser /> : <MainMenu />}
        </navbar>
    )
}

export default NavBar

