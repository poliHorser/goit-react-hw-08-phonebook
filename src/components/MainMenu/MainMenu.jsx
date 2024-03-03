import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/auth/auth-selectors";
import menuItems from "components/NavBar/NavBarMenu";

import { NavLink } from "react-router-dom";

const MainMenu = () => {
    
    const isLogin = useSelector(selectIsLogin);

    const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;


    const elements = filteredMenuItems.map(({id, to, text}) => (
                                                        <li key={id}>
                                                            <NavLink to={to}>{text}</NavLink>
                                                        </li>
                                                        ))

    return (
        <ul>
           {elements}
        </ul>
    )
}

export default MainMenu;