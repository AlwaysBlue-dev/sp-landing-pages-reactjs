import { useLocation } from 'react-router-dom';
import { pageConfig } from '../pageConfig';

function ResourcesPage() {
  const location = useLocation();
  const basePath = location.pathname.split('/resources')[0] || '/';
  const { title } = pageConfig[basePath] || pageConfig['/'];

  return (
    <div className="container-fluid py-5 mt-5 text-center">
      <h1>{title} Resources</h1>
      <p>Resources for {title}. Customize this page with specific content.</p>
    </div>
  );
}

export default ResourcesPage;