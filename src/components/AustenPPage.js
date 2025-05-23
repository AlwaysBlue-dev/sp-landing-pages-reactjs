import { useLocation } from 'react-router-dom';
import { pageConfig } from '../pageConfig';
import Hero from './Hero';
import QuickAccess from './QuickAccess';
import Announcements from './Announcements';
import Recognition from './Recognition';
import EventNews from './EventNews';

function AustenPPage() {
  const location = useLocation();
  const { title, quickAccess } = pageConfig[location.pathname] || pageConfig['/'];

  return (
   <div className="main-content container-fluid">
      <Hero />
      <Announcements />
      <QuickAccess quickAccess={quickAccess} />
       <EventNews />
      <Recognition />
    </div>
  );
}

export default AustenPPage;