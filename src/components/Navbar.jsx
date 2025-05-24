import { Link, useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

export default function Navbar({ logo, name, currentPage }) {
  const location = useLocation();

  const resourcesPath = currentPage === 'austen-main' ? '/resources' : `/${currentPage}/resources`;
  const supportPath = currentPage === 'austen-main' ? '/support' : `/${currentPage}/support`;

  // Normalize dashboard path (removing /resources or /support)
  let dashboardPath = location.pathname;
  if (location.pathname.endsWith('/resources') || location.pathname.endsWith('/support')) {
    dashboardPath = location.pathname.replace(/\/(resources|support)$/, '');
    if (dashboardPath === '') dashboardPath = '/';
  }

  const isDashboardActive = location.pathname === dashboardPath;
  const isResourcesActive = location.pathname === resourcesPath;
  const isSupportActive = location.pathname === supportPath;

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid nav-container">
        <Link to={dashboardPath} className="navbar-brand nav-brand">
          <img src={logo} className="nav-logo img-fluid" alt={`${name} Logo`} />
          <span className='ms-3 text-uppercase'>{name}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isDashboardActive ? 'active' : ''}`} to={dashboardPath}>Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Companies <i className="fas fa-chevron-down ms-1"></i>
              </a>
              <ul className="dropdown-menu">
                {Object.keys(pageData).map((page) => (
                  <li key={page}>
                    <Link className="dropdown-item" to={`/${page}`}>{pageData[page].name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isResourcesActive ? 'active' : ''}`} to={resourcesPath}>Resources</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isSupportActive ? 'active' : ''}`} to={supportPath}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
