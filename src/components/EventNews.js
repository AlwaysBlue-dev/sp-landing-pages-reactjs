import React from 'react';

function DashboardNewsEvents() {
  const newsItems = [
    {
      date: 'Oct 15',
      title: "CEO's Quarterly Vision Update",
      excerpt: 'Our leadership team shares exciting new initiatives and strategic direction for Q4, including expansion into new markets and innovative technology investments.',
    },
    {
      date: 'Oct 12',
      title: 'New Hybrid Work Policy',
      excerpt: 'Updated flexible work guidelines take effect next month, offering enhanced work-life balance options and collaborative workspace improvements.',
    },
    {
      date: 'Oct 8',
      title: 'Safety Protocol Updates',
      excerpt: 'Important updates to our safety procedures across all divisions to ensure continued compliance and employee wellbeing.',
    },
  ];

  const eventItems = [
    {
      day: '25',
      month: 'OCT',
      title: 'All-Hands Meeting',
      description: 'Quarterly company update and Q&A session',
    },
    {
      day: '05',
      month: 'NOV',
      title: 'Safety Training',
      description: 'Mandatory safety certification renewal',
    },
    {
      day: '18',
      month: 'NOV',
      title: 'Team Building Event',
      description: 'Annual company retreat and activities',
    },
    {
      day: '25',
      month: 'DEC',
      title: 'Holiday Closure',
      description: 'Christmas Day - Office closed',
    },
  ];

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
                  <div className="news-date">{item.date}</div>
                </div>
                <div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
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

export default DashboardNewsEvents;