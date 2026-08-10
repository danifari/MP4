import './Footer.css';
import Icons from './Icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <span className="footer-kicker">MP4 / closing notes</span>
          <p className="footer-text">
            Sessions, bookings, press e collab requests. Keep the night moving, keep the signal loud.
          </p>
        </div>

        <div className="footer-meta">
          <a href="#discover">Discover</a>
          <a href="#top">Back to top</a>
          <span>Available for bookings</span>
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