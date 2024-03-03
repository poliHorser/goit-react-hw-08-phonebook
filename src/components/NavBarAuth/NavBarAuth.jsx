import { NavLink } from "react-router-dom";

const NavBarAuth = () => {
    return (
        <div>
            <NavLink to='/register'>Register</NavLink>
             <NavLink to='/login'>/       LogIn</NavLink>
        </div>
    )
}
export default NavBarAuth