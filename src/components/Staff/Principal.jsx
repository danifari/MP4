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
  },
  {
    id: "difo",
    name: "Difo",
    role: "DJ",
    vibe: "Chaos",
    energy: 99,
    img: difossj,
  },
  {
    id: "2999",
    name: "2999",
    role: "Vocalist",
    vibe: "Ethereal",
    energy: 99,
    img: char3,
  },
];

function Principal() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="char-select">
      <h1 className="char-select__title">CHOOSE YOUR FIGHTER</h1>

      

      <div className="char-select__grid">
        {FIGHTERS.map((f) => (
          <button
            key={f.id}
            className={`char-card ${selected === f.id ? "char-card--active" : ""}`}
            onClick={() => setSelected(f.id)}
          >
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

            {selected === f.id && <div className="char-card__cursor">▶ SELECT</div>}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Principal;