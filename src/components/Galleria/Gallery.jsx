import "./Gallery.css";
import flavio2 from "../../assets/characters/flavio2.png";

const PHOTOS = [
  { id: "ph-01", src: flavio2, alt: "Dancefloor, MP4 night", frame: "001" },
  { id: "ph-02", src: flavio2, alt: "DJ set, MP4 night", frame: "014" },
  { id: "ph-03", src: flavio2, alt: "Crowd, MP4 night", frame: "027" },
  { id: "ph-04", src: flavio2, alt: "Backstage, MP4 night", frame: "033" },
  { id: "ph-05", src: flavio2, alt: "Dancefloor, MP4 night", frame: "041" },
  { id: "ph-06", src: flavio2, alt: "Crowd, MP4 night", frame: "052" },
];

// Cartella Drive col rullino completo di ogni serata
const DRIVE_LINK = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header">
        <div>
          <span className="gallery__eyebrow">From The Floor</span>
          <h2 className="gallery__title">The Nights</h2>
        </div>

        <a
          className="gallery__drive-link"
          href={DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Roll on Drive ↗
        </a>
      </div>

      <div className="gallery__reel">
        <div className="gallery__sprocket" aria-hidden="true"></div>

        <div className="gallery__filmstrip">
          {PHOTOS.map((p) => (
            <figure className="gallery__frame" key={p.id}>
              <img src={p.src} alt={p.alt} className="gallery__photo" loading="lazy" />
              <figcaption className="gallery__frame-number">No. {p.frame}</figcaption>
            </figure>
          ))}

          <a
            className="gallery__frame gallery__frame--cta"
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="gallery__cta-text">
              View Full<br />Roll
            </span>
            <span className="gallery__cta-arrow">↗</span>
          </a>
        </div>

        <div className="gallery__sprocket" aria-hidden="true"></div>
      </div>
    </section>
  );
}

export default Gallery;