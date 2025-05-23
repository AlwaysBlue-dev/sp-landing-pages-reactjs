import { Link } from 'react-router-dom';

function QuickAccess({ quickAccess }) {
  return (
    <section className="quick-access py-5">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-bolt section-icon"></i> Quick Access
        </h2>
        <div className="row">
          {quickAccess.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={item.href} className="text-decoration-none">
                <div className="access-card text-center">
                  <i className={`fas ${item.icon} card-icon`}></i>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;