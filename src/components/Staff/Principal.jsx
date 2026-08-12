import { useState } from "react";
import "./Principal.css";
import difossj from "../../assets/characters/difossj.png";
import M4tt3w from "../../assets/characters/M4tt3w.png";
import char3 from "../../assets/characters/char3.png";

const FIGHTERS = [
  {
    id: "matthew-wrld",
    name: "Matthew Wrld",
    role: "Dj",
    vibe: "Dark",
    energy: 99,
    img: M4tt3w,
    namevideo: "Matthew Wrld live set",
    video: "https://www.youtube.com/embed/Ruds9piuXos?si=HulO4B1vKBfA_zmY",
    bio: "Producer resident, tracce cupe e bassi che spaccano il petto.",
    social: ["Nightcrawl", "Void State", "Loop 999"],
  },
  {
    id: "difo",
    name: "Difo",
    role: "DJ",
    vibe: "Chaos",
    energy: 99,
    img: difossj,
    namevideo: "Difo live set",
    video: "https://www.youtube.com/embed/oQg1mpmzSac?si=HvO1Yjd1iwDYMLE0" ,
    bio: "Set imprevedibili, mixaggio ad alto rischio, zero compromessi.",
    social: ["Static Riot", "Panic Room", "Overdrive"],
  },
  {
    id: "2999",
    name: "2999",
    role: "Vocalist",
    vibe: "Ethereal",
    energy: 99,
    img: char3,
    bio: "Voce eterea sopra beat distorti, l'anima liquida del collettivo.",
    social: ["Ghost Signal", "Blue Static", "2999 Interlude"],
  },
];

function Principal() {
  const [flipped, setFlipped] = useState(null);

  const toggleFlip = (id) => {
    setFlipped((current) => (current === id ? null : id));
  };

  return (
    <section className="char-select">
      <h1 className="char-select__title">CHOOSE YOUR FIGHTER</h1>

      <div className="char-select__grid">
        {FIGHTERS.map((f) => (
          <div className="char-card" key={f.id}>
            <button
              className={`char-card__inner ${
                flipped === f.id ? "char-card__inner--flipped" : ""
              }`}
              onClick={() => toggleFlip(f.id)}
              aria-pressed={flipped === f.id}
              aria-label={`${f.name}, mostra dettagli`}
            >
              {/* FRONT */}
              <div className="char-card__face char-card__face--front">
                <div className="char-card__portrait">
                  <img src={f.img} alt={f.name} />
                </div>

                <p className="char-card__name">{f.name}</p>

                <div className="char-card__stats">
                  <div className="char-card__stat">
                    <span>ROLE</span>
                    <span>{f.role}</span>
                  </div>
                  <div className="char-card__stat">
                    <span>VIBE</span>
                    <span>{f.vibe}</span>
                  </div>
                  <div className="char-card__stat">
                    <span>ENERGY</span>
                    <span>{f.energy}%</span>
                  </div>
                  <div className="char-card__bar">
                    <div
                      className="char-card__bar-fill"
                      style={{ width: `${f.energy}%` }}
                    />
                  </div>
                </div>

                <div className="char-card__cursor">▶ TAP FOR INFO</div>
              </div>

              {/* BACK */}
              <div className="char-card__face char-card__face--back">
                {f.video && (
                  <div className="video-container">
                    {flipped === f.id && (
                      <iframe
                        src={f.video}
                        title={f.namevideo || f.name}
                        frameBorder="0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                )}

                <p className="char-card__name char-card__name--back">{f.name}</p>

                <p className="char-card__bio">{f.bio}</p>

                <div className="char-card__tracklist">
                  <span className="char-card__tracklist-title">SOCIAL</span>
                  <ul>
                    {f.social.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="char-card__cursor">◀ BACK</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Principal;