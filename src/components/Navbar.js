import { Link, useLocation } from 'react-router-dom';
import { pageConfig } from '../pageConfig';

function Navbar() {
  const location = useLocation();

  // Determine the config key for title and logo
  let configKey = location.pathname;
  if (!pageConfig[configKey] && (location.pathname.endsWith('/resources') || location.pathname.endsWith('/support'))) {
    configKey = location.pathname.replace(/\/(resources|support)$/, '') || '/';
  }
  const { title, logo } = pageConfig[configKey] || pageConfig['/'];

  // Determine the base path for Resources and Support links
  let basePath = location.pathname;
  if (location.pathname !== '/' && (location.pathname.endsWith('/resources') || location.pathname.endsWith('/support'))) {
    basePath = location.pathname.replace(/\/(resources|support)$/, '');
  }
  basePath = basePath === '/' ? '' : basePath;

  // Compute the dashboard path
  let dashboardPath = location.pathname;
  if (location.pathname.endsWith('/resources') || location.pathname.endsWith('/support')) {
    dashboardPath = location.pathname.replace(/\/(resources|support)$/, '');
    if (dashboardPath === '') dashboardPath = '/';
  }

  console.log('Navbar rendering:', {
    title,
    logo,
    currentPath: location.pathname,
    configKey,
    basePath,
    dashboardPath,
    resourcesPath: `${basePath}/resources`,
    supportPath: `${basePath}/support`
  });

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid nav-container">
        <Link to="/" className="navbar-brand nav-brand">
          <img src={logo} className="nav-logo img-fluid" alt={`${title} Logo`} />
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={dashboardPath}
                aria-current="page"
                onClick={() => console.log('Top-level Dashboard clicked, navigating to:', dashboardPath)}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Companies <i className="fas fa-chevron-down ms-1"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={() => console.log('Austen Enterprises Dashboard clicked')}
                  >
                    Austen Enterprises Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_FS"
                    onClick={() => console.log('Austen Fire and Security Dashboard clicked')}
                  >
                    Austen Fire and Security Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_E"
                    onClick={() => console.log('Austen Electric Dashboard clicked')}
                  >
                    Austen Electric Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_B"
                    onClick={() => console.log('Austen Builders Dashboard clicked')}
                  >
                    Austen Builders Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_AC"
                    onClick={() => console.log('Austen Air Conditioning Dashboard clicked')}
                  >
                    Austen Air Conditioning Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_G"
                    onClick={() => console.log('Austen Generators Dashboard clicked')}
                  >
                    Austen Generators Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_IS"
                    onClick={() => console.log('Austen Integrated Systems Dashboard clicked')}
                  >
                    Austen Integrated Systems Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/subsidiary/Austen_P"
                    onClick={() => console.log('Austen Plumbing Dashboard clicked')}
                  >
                    Austen Plumbing Dashboard
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`${basePath}/resources`}
                onClick={() => console.log('Resources clicked, navigating to:', `${basePath}/resources`)}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`${basePath}/support`}
                onClick={() => console.log('Support clicked, navigating to:', `${basePath}/support`)}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;