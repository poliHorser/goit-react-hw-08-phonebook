import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/auth/auth-selectors";
import menuItems from "components/NavBar/NavBarMenu";
import "./MainMenu.css"
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    
    const isLogin = useSelector(selectIsLogin);

    const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;


    const elements = filteredMenuItems.map(({id, to, text}) => (
                                                        <li key={id} className="element_li">
                                                            <NavLink to={to} className="element_nav"><p className="element_p">{text}</p></NavLink>
                                                        </li>
                                                        ))

    return (
        <ul className="nav-ul">
           {elements}
        </ul>
    )
}

export default MainMenu;