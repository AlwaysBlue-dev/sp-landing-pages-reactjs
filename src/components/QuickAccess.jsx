import { Link, useLocation } from 'react-router-dom';

function QuickAccess({ quickAccess }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;

  return (
    <section className="quick-access py-5">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-bolt section-icon"></i> Quick Access
        </h2>
        <div className="row">
          {quickAccess.map((item, index) => {
            // Prepend the current subsidiary to the link if it doesn't already start with it
            const link = item.link.startsWith(`/${currentPage}`) || item.link.startsWith('http') 
              ? item.link 
              : `/${currentPage}${item.link.startsWith('/') ? item.link : `/${item.link}`}`;
            return (
              <div key={index} className="col-md-4 mb-4">
                <Link to={link} className="text-decoration-none">
                  <div className="access-card text-center">
                    <i className={`fas ${item.icon} card-icon`}></i>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;