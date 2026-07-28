import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

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
                    <li><a href="#" className="nav-link active" data-page="home">Home</a></li>
                    <li><a href="#" className="nav-link" data-page="about">About</a></li>
                    <li><a href="#" className="nav-link" data-page="services">Services</a></li>
                    <li><a href="#" className="nav-link" data-page="contact">Contact</a></li>
                </ul>
                <h1><span className="testo-evidenziato">MP4</span>session</h1>
            </header>

            {menuOpen && (
                <div className="overlay" onClick={() => setMenuOpen(false)}></div>
            )}

            <ul className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <li><a href="#" className="nav-link active" data-page="home">Home</a></li>
                <li><a href="#" className="nav-link" data-page="about">About</a></li>
                <li><a href="#" className="nav-link" data-page="services">Services</a></li>
                <li><a href="#" className="nav-link" data-page="contact">Contact</a></li>
            </ul>
        </>
    );
}

export default Header;