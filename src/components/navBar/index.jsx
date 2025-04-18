import React, { useState} from "react";
import { FaBars, FaReact, FaMoon, FaTimes, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'About Me',
        to: '/about',
    },
    {
        label: 'Skills',
        to: '/skills',
    },
    {
        label: 'Project',
        to: '/project',
    },
    // {
    //     label: 'Resume',
    //     to: '/resume',
    // },
    {
        label: 'Contact',
        to: '/contact',
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    // const toggleTheme = () => setDarkMode(!darkMode);

    // useEffect(() => {
    //     document.body.className = darkMode ? 'dark' : 'light';
    // }, [darkMode]);

    return (
        // <div>
        <nav className="navbar">
            <div className="navbar_container">
                <Link to={"/"} className="navbar_container_logo">
                    <FaReact size={30} />
                </Link>

                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>

            </div>
            
            {/* <div className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
            </div> */}
        </nav>
    )
}

export default Navbar;