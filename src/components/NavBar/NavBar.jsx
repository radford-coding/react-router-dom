import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => ({
                            color: isActive ? "red" : "#646cff",
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/pokemon'>Pokemon</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;