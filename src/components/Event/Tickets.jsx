import "./Tickets.css";

const monthMap = {
  GEN: 0, FEB: 1, MAR: 2, APR: 3, MAG: 4, GIU: 5,
  LUG: 6, AGO: 7, SET: 8, OTT: 9, NOV: 10, DIC: 11
};

// Immagine di fallback: usata da Event.jsx quando il prossimo evento
// non ha un campo "img" valorizzato.
export const DEFAULT_EVENT_IMAGE =
  "https://summerrockz.com/wp-content/uploads/2025/06/dj-opium.jpg";

export const EVENTS = [
  {
    id: "opium-night-01",
    month: "AGO",
    day: "26",
    year: "2026",
    time: "23:00",
    venue: "Hotel Butterfly",
    city: "Roma",
    lineup: ["Matthew Wrld", "Difo"],
    status: "Tickets",
    event: "https://overnight-app.com/",
    linkp: "https://www.google.com/maps/place/Hotel+Butterfly/@41.9299618,12.4523419,16z/data=!3m1!4b1!4m6!3m5!1s0x132f60e98ca5d7e5:0x5c6c0daf953fd506!8m2!3d41.9299578!4d12.4549168!16s%2Fg%2F11dfswfp7z?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    img: "https://cdn.zero.eu/uploads/2018/04/29790613_559938431047455_6782490952297611264_o.jpg", // TODO: aggiungere url immagine specifica per questa data
  },
  {
    id: "opium-night-02",
    month: "SET",
    day: "12",
    year: "2026",
    time: "22:30",
    venue: "Rashõmon Club",
    city: "Roma",
    lineup: ["Matthew Wrld", "Difo"],
    status: "TICKETS",
    event: "https://overnight-app.com/",
    linkp: "https://www.google.com/maps/place/Rash%C3%B5mon+Club/@41.8646906,12.4787407,17z/data=!3m2!4b1!5s0x13258a80d7e01f19:0x676e2a07944394b9!4m6!3m5!1s0x13258a80d094c533:0xa77cb1c778b9396f!8m2!3d41.8646866!4d12.4813156!16s%2Fg%2F1tdgxj9m?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    img: null,
  },
  {
    id: "opium-night-03",
    month: "OTT",
    day: "04",
    year: "2026",
    time: "23:30",
    venue: "Gazometro",
    city: "Roma",
    lineup: ["Matthew Wrld", "2999"],
    status: "SOLD OUT",
    event: "https://overnight-app.com/",
    linkp: "https://www.google.com/maps/place/Gazometro/@41.8695651,12.4699548,17z/data=!4m10!1m2!2m1!1sgazometro!3m6!1s0x13258a82836b109d:0xc682a665bcbadcc0!8m2!3d41.8695651!4d12.4747184!15sCglnYXpvbWV0cm9aCyIJZ2F6b21ldHJvkgETaGlzdG9yaWNhbF9sYW5kbWFya5oBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQycE9SMWx0WkhsVVZ6VlRUa2RWTVdOcVpHWlViazB4VkZVMU1sUlZSUkFC4AEA-gEFCLEDEDk!16s%2Fg%2F11h3g4559f?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    img: null,
  },
  {
    id: "opium-night-past",
    month: "LUG",
    day: "10",
    year: "2026",
    time: "22:00",
    venue: "Club Passato",
    city: "Napoli",
    lineup: ["Difo"],
    status: "SOLD OUT",
    event: "",
    linkp: "https://www.google.com/search?q=Club+Passato+Napoli",
    img: null,
  }
];

export const getEventDate = (event) => {
  const [hours, minutes] = event.time.split(":");
  return new Date(
    parseInt(event.year),
    monthMap[event.month.toUpperCase()],
    parseInt(event.day),
    parseInt(hours),
    parseInt(minutes)
  );
};

// Unica fonte di verità per "quali eventi sono ancora da venire, in ordine":
// usata sia da Tickets.jsx (lista completa) sia da Event.jsx (poster in home,
// che prende solo il primo elemento).
export const getUpcomingEvents = () => {
  const now = new Date();
  return EVENTS
    .filter((e) => getEventDate(e) >= now)
    .sort((a, b) => getEventDate(a) - getEventDate(b));
};

function Tickets() {
  const upcomingEvents = getUpcomingEvents();

  const handleEventClick = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleVenueClick = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="events">
      <span className="events__eyebrow">Live Dates</span>
      <h2 className="events__title">Next Up</h2>

      <div className="events__list">
        {upcomingEvents.map((e, index) => {
          const isNextEvent = index === 0;

          return (
            <div
              className={`event-row ${isNextEvent ? "event-row--next" : ""}`}
              key={e.id}
            >
              <div className="event-row__date">
                <span className="event-row__day">{e.day}</span>
                <span className="event-row__month">{e.month}</span>
                <span className="event-row__year">{e.year}</span>
              </div>

              <div className="event-row__body">
                {isNextEvent && <span className="event-row__flag">Next Up</span>}
                <button
                  type="button"
                  className="event-row__venue"
                  onClick={() => handleVenueClick(e.linkp)}
                  disabled={!e.linkp}
                >
                  {e.venue}, {e.city}
                </button>
                <div className="event-row__meta">
                  <span className="event-row__meta-item">{e.time}</span>
                  <span className="event-row__meta-item">
                    {e.lineup.join(" / ")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="event-row__status"
                onClick={() => handleEventClick(e.event)}
                disabled={!e.event}
              >
                {e.status}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tickets;