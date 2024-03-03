import { useSelector } from "react-redux"

import { selectUser } from "../../redux/auth/auth-selectors";

const NavBarUser = () => {
    const {name} = useSelector(selectUser);
    return (
        <div>
            {name}
            <button>LogOut</button>
        </div>
    )
}

export default NavBarUser