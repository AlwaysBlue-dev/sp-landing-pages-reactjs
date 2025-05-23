function Announcements() {
       const slides = [
         { title: 'Company News', description: 'Latest updates from Austen Enterprises' },
         { title: 'Leadership Message', description: 'A message from our CEO' },
         { title: 'Event Announcement', description: 'Upcoming company-wide event' },
         { title: 'Policy Change', description: 'New hybrid work policy effective next month' },
         { title: 'IT Alert', description: 'System maintenance scheduled for this weekend' },
         { title: 'Training Deadline', description: 'Complete safety training by Nov 5' },
       ];

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