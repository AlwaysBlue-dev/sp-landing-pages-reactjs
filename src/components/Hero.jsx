import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

function Hero() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const { title, description } = data.hero || { title: 'Welcome', description: 'Your central hub for company resources, updates, and tools.' };

  return (
    <section className="hero text-center py-5 mt-5">
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}

export default Hero;  