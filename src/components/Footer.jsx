import { Link, useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

export default function Footer() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];

  return (
    <footer className="footer">
      <div className="footer-content container text-center">
        <div className="footer-links d-flex justify-content-center gap-3 flex-wrap mb-3">
          {Object.keys(pageData).map((page) => (
            <Link key={page} to={`/${page}`} className="footer-link">{pageData[page].name}</Link>
          ))}
          <Link to={`/${currentPage}/resources`} className="footer-link">Resources</Link>
          <Link to={`/${currentPage}/support`} className="footer-link">Support</Link>
        </div>
        <p className="footer-text">© 2025 {data.name} • Powering Innovation Across Industries</p>
      </div>
    </footer>
  );
}