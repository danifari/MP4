import "./Tickets.css";

const EVENTS = [
  {
    id: "opium-night-01",
    month: "AGO",
    day: "23",
    year: "2026",
    time: "23:00",
    venue: "Spazio Ellittica",
    city: "Roma",
    lineup: ["Matthew Wrld", "Difo"],
    status: "Tickets",
    link: "#",
    isNext: true,
  },
  {
    id: "opium-night-02",
    month: "SET",
    day: "12",
    year: "2026",
    time: "22:30",
    venue: "Fondo Magazzino",
    city: "Milano",
    lineup: ["2999", "Difo"],
    status: "TICKETS",
    link: "#",
  },
  {
    id: "opium-night-03",
    month: "OTT",
    day: "04",
    year: "2026",
    time: "23:30",
    venue: "Kollektiv Halle",
    city: "Torino",
    lineup: ["Matthew Wrld", "2999"],
    status: "SOLD OUT",
    link: "#",
  },
];

function Tickets() {
  return (
    <section className="events">
      <span className="events__eyebrow">Live Dates</span>
      <h2 className="events__title">Next Up</h2>

      <div className="events__list">
        {EVENTS.map((e) => (
          <a
            href={e.link}
            className={`event-row ${e.isNext ? "event-row--next" : ""}`}
            key={e.id}
          >
            <div className="event-row__date">
              <span className="event-row__day">{e.day}</span>
              <span className="event-row__month">{e.month}</span>
              <span className="event-row__year">{e.year}</span>
            </div>

            <div className="event-row__body">
              {e.isNext && <span className="event-row__flag">Next Up</span>}
              <p className="event-row__venue">
                {e.venue}, {e.city}
              </p>
              <div className="event-row__meta">
                <span className="event-row__meta-item">{e.time}</span>
                <span className="event-row__meta-item">
                  {e.lineup.join(" / ")}
                </span>
              </div>
            </div>

            <span
              className={`event-row__status ${
                e.status === "SOLD OUT" ? "event-row__status--closed" : ""
              }`}
            >
              {e.status}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Tickets;