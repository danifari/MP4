import { useState, useEffect, useRef } from 'react';
import './Home.css';
import parentalAdvisory from '../assets/Parental_Advisory.png';

// Lista dei generi: aggiungine o rimuovine quanti ne vuoi, l'array gestisce tutto da solo
const genres = ['JUNGLE', 'HIP HOP', 'TRAP', 'BAILE FUNK', 'CLUB EDITS'];

// Trucco del "carosello infinito senza cuciture": aggiungiamo una copia
// dell'ULTIMO genere all'inizio e una copia del PRIMO genere alla fine.
// Es: [CLUB EDITS(copia), JUNGLE, HIP HOP, TRAP, BAILE FUNK, CLUB EDITS, JUNGLE(copia)]
// Quando l'utente arriva su una delle due copie, "scattiamo" istantaneamente
// (senza animazione) al vero elemento corrispondente: l'occhio non lo percepisce
// e lo scroll sembra continuare all'infinito, sempre nella stessa direzione.
const extendedGenres = [genres[genres.length - 1], ...genres, genres[0]];

function Home() {
  // Partiamo da 1: nell'array esteso, l'indice 1 è il VERO primo genere
  // (l'indice 0 è la copia finta dell'ultimo, messa lì solo per lo scroll all'indietro)
  const [currentIndex, setCurrentIndex] = useState(1);

  // Controlla se la fila deve scorrere con l'animazione oppure scattare di netto.
  // La spegniamo solo per l'istante in cui saltiamo dalla copia finta al vero elemento.
  const [withTransition, setWithTransition] = useState(true);

  // useRef invece di useState perché questo valore non deve mai causare un
  // nuovo render: ci serve solo come "interruttore" che nextGenre/prevGenre
  // possono controllare per sapere se in questo momento è meglio ignorare il click
  const isSnapping = useRef(false);

  const nextGenre = () => {
    if (isSnapping.current) return; // ignora il click se siamo nel mezzo dello scatto invisibile
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevGenre = () => {
    if (isSnapping.current) return;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Autoplay: ogni 2.5 secondi va avanti di un genere da solo
  useEffect(() => {
    const interval = setInterval(() => {
      nextGenre();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Gestisce lo "scatto invisibile" quando la fila arriva su una delle due copie finte.
  // Usiamo >= e <= (non ===) perché se l'indice viene incrementato più volte
  // molto vicine nel tempo (es. click ripetuti sui bottoni, o autoplay + click
  // che si sovrappongono), potrebbe "saltare" oltre l'esatto indice della copia.
  // Con === il controllo non scatterebbe mai più e l'indice crescerebbe
  // all'infinito, portandoti a scorrere oltre l'ultimo elemento reale (schermo vuoto).
  // Con >= / <= lo intercettiamo comunque, qualsiasi sia il valore in cui è "atterrato".
  useEffect(() => {
    const isOnCloneAtEnd = currentIndex >= extendedGenres.length - 1; // copia del primo
    const isOnCloneAtStart = currentIndex <= 0; // copia dell'ultimo

    if (isOnCloneAtEnd || isOnCloneAtStart) {
      isSnapping.current = true; // blocchiamo i click finché non abbiamo scattato
      // Aspettiamo che l'animazione CSS finisca (0.5s: deve combaciare con Home.css)
      const timeout = setTimeout(() => {
        setWithTransition(false); // spegniamo l'animazione per un istante
        setCurrentIndex(isOnCloneAtEnd ? 1 : genres.length); // saltiamo al vero elemento
        isSnapping.current = false; // riattiviamo i bottoni
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Dopo lo scatto invisibile, riaccendiamo l'animazione al frame successivo:
  // altrimenti il prossimo scorrimento risulterebbe anch'esso senza animazione
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  return (
    <>
      <section className="hero">
        <div className="hero-cd"></div>
        <h1 className="hero-title">
            <span className="word">LOREM </span>
            <span className="word"> IPSUM </span>
            <span className="word"> DOLOR </span>
            <span className="word"> SIT </span>
            <span className="word"> AMET </span>
            <span className="word"> CONSECTETUR </span>
        </h1>
      </section>
      <p className="about-text">MP4 non è solo un party, è un'esperienza sonora. Nato dall'esigenza di portare la vera attitudine del Rap e della Trap d'oltreoceano nei club, il collettivo ridefinisce le regole della notte. Con la direzione artistica e i suoni di Matthew Wrld & Difo, e spinto dalla vision di 2999, MP4 trasforma ogni set in un rituale immersivo. Dai bassi profondi dell'Hip Hop americano fino ai ritmi frenetici del Baile Funk e ai Club Edits più esclusivi, portiamo un'energia cruda e senza filtri direttamente in pista. From 23:00 till late: we run the club..</p>
      
      
      <div className="discover">
        <div className="box1">
          <span className="eyebrow">MP4 Sound System</span>
          <h2 className='genreh'>CHECK OUT OUR SOUND</h2>
          <img src={parentalAdvisory} alt="Explicit content" className="parentalAdvisory" />
        </div>
        <div className="ipod">
          <div className="screen">
            {/* Marchio in filigrana: resta presente ma non compete più con il genere in scorrimento */}
            <span className="screen-brand">MP4</span>
            <div className="content">
              <span className="now-playing-label">Now Playing</span>
              <div className="track-info">
                {/* track-track è la fila lunga con TUTTI i generi in orizzontale.
                    Lo spostiamo a sinistra di currentIndex * 100% per mostrare
                    sempre un solo genere alla volta dentro la finestrella "track-info" */}
                <div
                  className={`track-track${withTransition ? '' : ' no-transition'}`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {extendedGenres.map((genre, i) => (
                    <span className="track-item" key={`${genre}-${i}`}>
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            {/* Questo è il cerchio centrale vuoto e scuro */}
            <div className="center-button"></div>
            
            {/* I bottoni verticali esistenti (Top/Bottom) */}
            <button className="play-button">Play</button>
            <button className="pause-button">Pause</button>

            {/* NUOVI: I bottoni orizzontali (Left/Right) per cambiare traccia */}
            <button className="prev-track-button" onClick={prevGenre}>←</button>
            <button className="next-track-button" onClick={nextGenre}>→</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;