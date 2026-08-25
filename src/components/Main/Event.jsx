import './Event.css';
import { useNavigate } from 'react-router-dom';
import { getUpcomingEvents, getEventDate, DEFAULT_EVENT_IMAGE } from '../Event/Tickets';
// ^ aggiusta il path in base a dove si trova effettivamente Tickets.jsx

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Event() {
  const navigate = useNavigate();
  const nextEvent = getUpcomingEvents()[0];

  // Nessun evento futuro in Tickets: niente poster da mostrare in home
  if (!nextEvent) return null;

  const dateLabel = capitalize(
    getEventDate(nextEvent).toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );

  const posterImage = nextEvent.img || DEFAULT_EVENT_IMAGE;

  const goToEvents = () => navigate('/events');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToEvents();
    }
  };

  return (
    <div
      className="event"
      id="event"
      role="link"
      tabIndex={0}
      onClick={goToEvents}
      onKeyDown={handleKeyDown}
    >
      <img
        src={posterImage}
        alt={`${nextEvent.venue}, ${nextEvent.city}`}
        className="event-image"
      />
      <div className="event-scrim" />

      <div className="event-content">
        <span className="event-eyebrow">Next Event</span>

        <p className="event-date">
          <i className="fa-regular fa-calendar"></i>
          {dateLabel}
        </p>

        <p className="event-location">
          <i className="fa-solid fa-location-dot"></i>
          <a
            href={nextEvent.linkp}
            target="_blank"
            rel="noopener noreferrer"
            title="Apri su Google Maps"
            onClick={(e) => e.stopPropagation()}
          >
            {nextEvent.venue}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Event;