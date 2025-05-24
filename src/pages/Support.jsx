import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Support() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const support = data.support || { title: 'Support', description: 'No support information available.', contacts: [] };

  return (
    <div>
    <div className="main-content container">
      <Navbar logo={data.logo} name={data.name} currentPage={currentPage} />
      <section className="hero text-center py-5 mt-5">
        <h1>{support.title}</h1>
        <p>{support.description}</p>
      </section>
      <section className="support my-4">
        <h3>Support Contacts</h3>
        {support.contacts.length > 0 ? (
          <ul>
            {support.contacts.map((contact, index) => (
              <li key={index}>
                {contact.name}: <a href={`mailto:${contact.email}`}>{contact.email}</a>, {contact.phone}
              </li>
            ))}
          </ul>
        ) : (
          <p>No support contacts listed.</p>
        )}
      </section>
   
    </div>
       <Footer />
         </div>
  );
}