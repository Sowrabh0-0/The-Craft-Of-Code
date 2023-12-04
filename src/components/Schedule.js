import React, { useState } from 'react';
import styles from'../assets/styles/Schedule.module.css'; // Assume you have a CSS file with all the styles

const Schedule = () => {
    const [selectedEvent, setSelectedEvent] = useState(    { id: 1, date: '11 Jun 2023', name: 'Event 1', venue: 'Venue 1, city, country', details: 'Details for Event 1...' },
    );
  // This array could potentially come from props or state in a real application
  const events = [
    { id: 1, date: '11 Jun 2023', name: 'Event 1', venue: 'Venue 1, city, country', details: 'Details for Event 1...' },
    { id: 2, date: '09 Jun 2023', name: 'Event 2', venue: 'Venue 2, city, country', details: 'Details for Event 2...' },
    { id: 3, date: '05 Jun 2023', name: 'Event 3', venue: 'Venue 3, city, country', details: 'Details for Event 3...' },
    { id: 4, date: '03 Jun 2023', name: 'Event 4', venue: 'Venue 4, city, country', details: 'Details for Event 4...' },
    { id: 5, date: '01 Jun 2023', name: 'Event 5', venue: 'Venue 5, city, country', details: 'Details for Event 5...' },
    { id: 6, date: '30 May 2023', name: 'Event 6', venue: 'Venue 6, city, country', details: 'Details for Event 6...' },
    { id: 7, date: '28 May 2023', name: 'Event 7', venue: 'Venue 7, city, country', details: 'Details for Event 7...' },
    { id: 8, date: '25 May 2023', name: 'Event 8', venue: 'Venue 8, city, country', details: 'Details for Event 8...' },
    { id: 9, date: '22 May 2023', name: 'Event 9', venue: 'Venue 9, city, country', details: 'Details for Event 9...' },
    { id: 10, date: '20 May 2023', name: 'Event 10', venue: 'Venue 10, city, country', details: 'Details for Event 10...' },
    // ... add as many events as needed
  ];
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    console.log(event)
  };

  return (
    <div className={styles.divdiv}>
        
    <div className={styles.eventscalendar}>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className={styles.date}>{event.date}</div>
          <button className={styles.event} onClick={() => handleEventClick(event)}>
            {event.name}<br />
            {event.venue}
          </button>
        </React.Fragment>
      ))}
    </div>
    {selectedEvent && (
        
        <div className={styles.eventdetails}>
        <div className={styles.whitebox}>

        </div>
        <div className={styles.column}>
          <h2>{selectedEvent.name}</h2>
          <div className={styles.detailsev}>
          <p>{selectedEvent.details}</p>
          </div>
          <div className={styles.dateandven}> 
          <p>Date: {selectedEvent.date}</p>
          <p>Venue: {selectedEvent.venue}</p>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
