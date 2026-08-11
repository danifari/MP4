import './Footer.css';
import Icons from './Icons';
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    
    // Se siamo già in home, scolla all'elemento
    if (location.pathname === '/') {
      const element = document.getElementById('discover');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se siamo in un'altra pagina, naviga alla home
      navigate('/');
      // Scolla dopo che la pagina si è caricata
      setTimeout(() => {
        const element = document.getElementById('discover');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <span className="footer-kicker">MP4 / closing notes</span>
          <p className="footer-text">
            check our vibes and contact us for more info and collaborations.
          </p>
        </div>

        <div className="footer-meta">
          <a href="#top">Back to top</a>
          <a href="#discover" onClick={handleDiscoverClick}>Discover the sound</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farinola.2086585@studenti.uniroma1.it" 
            target="_blank"
            title="email"> let's keep in contact</a>
        </div>

        <div className="footer-icons-container">
          <Icons variant="footer" />
        </div>

        <div className="footer-bottom">
          <span>© 2026 MP4</span>
          <span>Art direction by Matthew Wrld & Difo</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;