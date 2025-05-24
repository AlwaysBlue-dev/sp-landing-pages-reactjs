import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Resources() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const resources = data.resources || { title: 'Resources', description: 'No resources available.', items: [] };

  return (
    <div>
      <div className="main-content container">
      <Navbar logo={data.logo} name={data.name} currentPage={currentPage} />
      <section className="hero text-center py-5 mt-5">
        <h1>{resources.title}</h1>
        <p>{resources.description}</p>
      </section>
      <section className="resources my-4">
        <h3>Available Resources</h3>
        {resources.items.length > 0 ? (
          <ul>
            {resources.items.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No resources listed.</p>
        )}
      </section>
     
      </div>
       <Footer />
    </div>
    
  );
  
}
