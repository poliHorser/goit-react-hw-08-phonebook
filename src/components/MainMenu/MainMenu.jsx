import { NavLink } from "react-router-dom";

const MainMenu = ()=> {
    return (
        <div className="main-div">
            <ul className="header">
                <li className="header-li">
                    <NavLink className="link" to="/">Contacts</NavLink>               
                </li>
                {/* <li className="header-li">
                    <NavLink  className="link" to="/movies">Movies</NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default MainMenu;