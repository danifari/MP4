import './Event.css';

function Event() {
  return (
    <div className="event" id="event">
        <img src="https://cdn.zero.eu/uploads/2018/04/29790613_559938431047455_6782490952297611264_o.jpg" alt="Event" className="event-image" />
        <div className="event-content">
            <h2 className="event-title">Next Event</h2>
            <p className="event-date">Saturday, June 15th, 2024</p>
            <p className="event-location">Rome, Italy</p>
        </div>
    </div>
  );
}

export default Event;

