import { useLocation } from 'react-router-dom';
import { pageConfig } from '../pageConfig';

function Hero() {
  const location = useLocation();
  const { title } = pageConfig[location.pathname] || pageConfig['/'];

  return (
    <section className="hero text-center py-5">
      <div className="container">
        <h1>Welcome to {title}</h1>
        <p className="lead">
          Your central hub for company resources, updates, and tools.
        </p>
      </div>
    </section>
  );
}

export default Hero;