import './Event.css';

function Event() {
  return (
    <div className="event" id="event">
      <img
        src="https://cdn.zero.eu/uploads/2018/04/29790613_559938431047455_6782490952297611264_o.jpg"
        alt="Event"
        className="event-image"
      />
      <div className="event-scrim" />

      <div className="event-content">
        <span className="event-eyebrow">Next Event</span>

        <p className="event-date">
          <i className="fa-regular fa-calendar"></i>
          Saturday, June 15th, 2024
        </p>

        <p className="event-location">
          <i className="fa-solid fa-location-dot"></i>
          <a
            href="https://www.google.com/maps/place/Hotel+Butterfly/@41.9299618,12.4523419,17z/data=!3m1!4b1!4m6!3m5!1s0x132f60e98ca5d7e5:0x5c6c0daf953fd506!8m2!3d41.9299578!4d12.4549168!16s%2Fg%2F11dfswfp7z?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            title="Apri su Google Maps"
          >
            Hotel Butterfly
          </a>
        </p>
      </div>
    </div>
  );
}

export default Event;