import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

function Announcements() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const slides = data.announcements || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

   return (
         <section className="announcements my-4">
           <div className="slider">
             {slides.map((slide, index) => (
               <div className="slide" key={index}>
                 <h3>{slide.title}</h3>
                 <p>{slide.description}</p>
               </div>
             ))}
           </div>
         </section>
       );
     }

export default Announcements;