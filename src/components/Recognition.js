import { FaTrophy, FaAward, FaBirthdayCake } from 'react-icons/fa';

     function Recognition() {
       const recognitions = [
         { icon: FaTrophy, title: 'Employee of the Month', name: 'Alex Martinez', description: 'Outstanding performance in client relations and project delivery. Alex\'s dedication has resulted in a 98% client satisfaction rate.' },
         { icon: FaAward, title: '5 Year Anniversary', name: 'Mia Thompson', description: 'Celebrating five years of exceptional service and leadership in our engineering division. Thank you for your continued dedication!' },
         { icon: FaBirthdayCake, title: 'Happy Birthday', name: 'Sam Johnson', description: 'Wishing our amazing team member a fantastic birthday! Thank you for bringing positivity and innovation to our workplace.' },
       ];

       return (
         <section className="recognition row g-4 my-5">
           {recognitions.map((item, index) => (
             <div className="col-12 col-md-6 col-lg-4" key={index}>
               <div className="recognition-card d-flex flex-column h-100">
                 <div className="recognition-avatar">
                   <item.icon />
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