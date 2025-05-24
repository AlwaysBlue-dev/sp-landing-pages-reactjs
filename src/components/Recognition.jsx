import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

function Recognition() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const recognitions = data.recognition || [];

  return (
    <section className="recognition row g-4 my-5">
      {recognitions.map((item, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index}>
          <div className="recognition-card d-flex flex-column h-100">
            <div className="recognition-avatar">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <h3 className="recognition-title">{item.title}</h3>
            <div className="recognition-name">{item.name}</div>
            <p className="recognition-description">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Recognition;