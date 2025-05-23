import { useLocation } from 'react-router-dom';
import { pageConfig } from '../pageConfig';

function SupportPage() {
  const location = useLocation();
  const basePath = location.pathname.split('/support')[0] || '/';
  const { title } = pageConfig[basePath] || pageConfig['/'];

  return (
    <div className="container py-5">
      <h1>{title} Support</h1>
      <p>Support resources for {title}. Customize this page with specific content.</p>
    </div>
  );
}

export default SupportPage;