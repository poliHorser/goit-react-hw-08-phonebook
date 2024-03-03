import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../redux/auth/auth-operations";
import { selectUser } from "../../redux/auth/auth-selectors";

const NavBarUser = () => {
    
    const { email } = useSelector(selectUser);
    const dispatch = useDispatch();

    const onLogout = ()=> dispatch(logout());
    return (
        <div>
            {email}
            <button onClick={onLogout}>LogOut</button>
        </div>
    )
}

export default NavBarUser