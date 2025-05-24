import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';
import Hero from '../components/Hero';
import QuickAccess from '../components/QuickAccess';
import Announcements from '../components/Announcements';
import Recognition from '../components/Recognition';
import EventNews from '../components/EventNews';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AustenEPage() {
   const location = useLocation();
    const pathParts = location.pathname.split("/");
    const subsidiary = pathParts[1] || "austen-main";
    const currentPage = subsidiary === "" ? "austen-main" : subsidiary;
    const data = pageData[currentPage] || pageData["austen-main"];
    const { quickAccess = [] } = data;
    const { announcements = [] } = data;
  
    return (
      <div className="main-content container-fluid">
        <Navbar logo={data.logo} name={data.name} currentPage={currentPage} />
        <Hero />
        <Announcements announcements={announcements} />
        <QuickAccess quickAccess={quickAccess} />
        <EventNews />
        <Recognition />
        <Footer />
      </div>
    );
  }

export default AustenEPage;