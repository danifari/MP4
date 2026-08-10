import './Footer.css';
import Icons from './Icons';

function Footer() {
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
          <a href="#discover">Discover the sound</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farinola.2086585@studenti.uniroma1.it" 
            target="_blank"
            title="email me"> let's keep in contact</a>
        </div>

        <Icons variant="footer" />

        <div className="footer-bottom">
          <span>© 2026 MP4</span>
          <span>Art direction by Matthew Wrld & Difo</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;