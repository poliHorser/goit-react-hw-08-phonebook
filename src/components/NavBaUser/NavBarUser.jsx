import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../redux/auth/auth-operations";
import { selectUser } from "../../redux/auth/auth-selectors";
import "./NavBarUser.css"


const NavBarUser = () => {
    
    const { email } = useSelector(selectUser);
    const dispatch = useDispatch();

    const onLogout = ()=> dispatch(logout());
    return (
        <div className="nav-ul">
            <p className="element_p">{email}</p>
            <button className="nav-btn" onClick={onLogout}>LogOut</button>
        </div>
    )
}

export default NavBarUser