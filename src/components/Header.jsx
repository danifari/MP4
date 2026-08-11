import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    function handleSideNavClick(e) {
        if (!e.target.closest('a.nav-link')) return;
        setMenuOpen(false);
    }

    const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

    return (
        <>
            <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
                <ul className="top-menu">
                    <li>
                        <a
                            href="#"
                            className="menu-burger"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
                            onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen); }}
                        >
                            <span className="menu-burger-icon" aria-hidden="true">
                                <span className="menu-burger-line" />
                                <span className="menu-burger-line" />
                                <span className="menu-burger-line" />
                            </span>
                        </a>
                    </li>
                    <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
                    <li><NavLink to="/radio" className={navClass}>Radio</NavLink></li>
                    <li><NavLink to="/events" className={navClass}>Events</NavLink></li>
                    <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
                </ul>
                <h1><span className="testo-evidenziato">MP4</span>session</h1>
            </header>

            {menuOpen && (
                <div className="overlay" onClick={() => setMenuOpen(false)}></div>
            )}

            <ul className={`side-menu ${menuOpen ? 'open' : ''}`} onClick={handleSideNavClick}>
                <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
                <li><NavLink to="/radio" className={navClass}>Radio</NavLink></li>
                <li><NavLink to="/events" className={navClass}>Events</NavLink></li>
                <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
            </ul>
        </>
    );
}

export default Header;