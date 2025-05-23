import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container text-center">
        <div className="footer-links d-flex justify-content-center gap-3 flex-wrap mb-3">
          <Link to="/subsidiary/Austen_FS" className="footer-link">Austen Fire and Security</Link>
          <Link to="/subsidiary/Austen_E" className="footer-link">Austen Electric</Link>
          <Link to="/subsidiary/Trent_B" className="footer-link">Trent Builders</Link>
          <Link to="/subsidiary/Austen_AC" className="footer-link">Austen Air Conditioning</Link>
          <Link to="/subsidiary/Austen_G" className="footer-link">Austen Generators</Link>
          <Link to="/subsidiary/Austen_IS" className="footer-link">Austen Integrated Systems</Link>
          <Link to="/subsidiary/Austen_P" className="footer-link">Austen Plumbing</Link>
        </div>
        <p className="footer-text">© 2025 Austen Enterprises • Powering Innovation Across Industries</p>
      </div>
    </footer>
  );
}

export default Footer;