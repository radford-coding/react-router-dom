import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => ({
                            textShadow: isActive ? '0 0 10px rgba(255,255,255,.5)' : 'none',
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/pokemon'
                        style={({ isActive }) => ({
                            textShadow: isActive ? '0 0 10px rgba(255,255,255,.5)' : 'none',
                        })}
                    >
                        Pokemon
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;