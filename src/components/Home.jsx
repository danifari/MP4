import './Home.css';
import parentalAdvisory from '../assets/Parental_Advisory.png';

function Home() {
  return (
    <>
      <div className="container">
        <div className="img-container"></div>
        <h1 className="maintitle">
            <span className="word">LOREM </span>
            <span className="word"> IPSUM </span>
            <span className="word"> DOLOR </span>
            <span className="word"> SIT </span>
            <span className="word"> AMET </span>
            <span className="word"> CONSECTETUR </span>
        </h1>
      </div>
      <p>MP4 non è solo un party, è un'esperienza sonora. Nato dall'esigenza di portare la vera attitudine del Rap e della Trap d'oltreoceano nei club, il collettivo ridefinisce le regole della notte. Con la direzione artistica e i suoni di Matthew Wrld & Difo, e spinto dalla vision di 2999, MP4 trasforma ogni set in un rituale immersivo. Dai bassi profondi dell'Hip Hop americano fino ai ritmi frenetici del Baile Funk e ai Club Edits più esclusivi, portiamo un'energia cruda e senza filtri direttamente in pista. From 23:00 till late: we run the club..</p>
      
      
      <div className="discover">
        <div className="box1">
          <img src={parentalAdvisory} alt="MP4 LOGO" className="parentalAdvisory" />
          
          <h2 className='genreh'>CHECK OUT OUR SOUND </h2>

          <img src={parentalAdvisory} alt="MP4 LOGO" className="parentalAdvisory" />
        </div>
        <div className="ipod">
          <div className="screen">
            <div className="content">
              <h2>MP4</h2>
              <p>jungle</p>
            </div>
          </div>
          <div className="buttons">
            {/* Questo è il cerchio centrale vuoto e scuro */}
            <div className="center-button"></div>
            
            {/* I bottoni verticali esistenti (Top/Bottom) */}
            <button className="play-button">Play</button>
            <button className="pause-button">Pause</button>

            {/* NUOVI: I bottoni orizzontali (Left/Right) per cambiare traccia */}
            <button className="prev-track-button">←</button>
            <button className="next-track-button">→</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;