import { useState } from "react";
import "./Second.css";
import flavio2 from "../../assets/characters/flavio2.png";
import matteo2 from "../../assets/characters/matteo2.png";
import char3 from "../../assets/characters/29992.png";

const FIGHTERS = [
  {
    id: "matthew-wrld",
    name: "Matthew Wrld",
    role: "Dj",
    vibe: "Dark",
    energy: 99,
    img: matteo2,
    namevideo: "Matthew Wrld live set",
    video: "https://www.youtube.com/embed/Ruds9piuXos?si=HulO4B1vKBfA_zmY",
    bio: "Producer resident, tracce cupe e bassi che spaccano il petto.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    social: ["Nightcrawl", "Void State", "Loop 999"],
  },
  {
    id: "difo",
    name: "Difo",
    role: "DJ",
    vibe: "Chaos",
    energy: 99,
    img: flavio2,
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

function Second() {
  // "selected" resta invariato finché non scegli un'altro DJ: guida il colore.
  // "open" controlla solo la rotazione della carta (fronte/retro).
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(null);

  const handleTap = (id) => {
    setSelected(id);
    setOpen((current) => (current === id ? null : id));
  };

  return (
    <section className="char-select2">
      <h1 className="char-select2__title">THE FACES</h1>

      <div className="char-select2__grid">
        {FIGHTERS.map((f) => (
          <div
            className={`char-card2 ${
              selected === f.id ? "char-card2--selected" : ""
            }`}
            key={f.id}
          >
            <button
              className={`char-card2__inner ${
                open === f.id ? "char-card2__inner--flipped" : ""
              }`}
              onClick={() => handleTap(f.id)}
              aria-pressed={open === f.id}
              aria-label={`${f.name}, mostra dettagli`}
            >
              {/* FRONT */}
              <div className="char-card2__face char-card2__face--front">
                <p className="char-card2__name">{f.name}</p>
                <div className="second-card2__portrait">
                  <img src={f.img} alt={f.name} className="second-card2__avatar" />
                </div>
                <p className="char-card2__role">{f.role}</p>


                <div className="char-card2__cursor">View Profile</div>
              </div>

              {/* BACK */}
              <div className="char-card2__face char-card2__face--back">
                {f.video && (
                  <div className="video-container2">
                    {open === f.id && (
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

                <p className="char-card2__name char-card2__name--back">{f.name}</p>
                <div className="char-card2__description">
                <p className="char-card2__bio">{f.bio}</p>

                <div className="char-card2__tracklist">
                  <span className="char-card2__tracklist-title">SOCIAL</span>
                  <ul>
                    {f.social.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                </div>

                <div className="char-card2__cursor">Close</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Second;