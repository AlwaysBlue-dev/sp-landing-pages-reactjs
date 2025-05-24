import { useLocation } from 'react-router-dom';
import { pageData } from '../data/pageConfig';

function EventNews() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const subsidiary = pathParts[1] || 'austen-main';
  const currentPage = subsidiary === '' ? 'austen-main' : subsidiary;
  const data = pageData[currentPage] || pageData['austen-main'];
  const newsItems = data.announcements || [];
  const eventItems = data.eventNews || [];

  return (
    <section className="dashboard row g-4 my-5">
      {/* News Section */}
      <div className="col-12 col-lg-8">
        <div className="news-section">
          <h2 className="section-title">
            <div className="section-icon">
              <i className="fas fa-newspaper"></i>
            </div>
            Company News & Updates
          </h2>
          <div className="news-container">
            {newsItems.map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-meta">
                  <div className="news-date">{item.date || 'N/A'}</div>
                </div>
                <div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="col-12 col-lg-4">
        <div className="events-section">
          <h2 className="section-title">
            <div className="section-icon">
              <i className="fas fa-calendar"></i>
            </div>
            Upcoming Events
          </h2>
          <div className="events-container">
            {eventItems.map((item, index) => (
              <div key={index} className="event-item">
                <div className="event-date">
                  <div className="event-day">{item.day}</div>
                  <div className="event-month">{item.month}</div>
                </div>
                <div className="event-details">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventNews;