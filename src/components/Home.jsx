import './Home.css';
import Hero from './Main/Hero';
import Discover from './Main/Discover';
import Event from './Main/Event';

function Home() {
  return (
    <>
      <Hero />
      
      <p className="about-text">MP4 non è solo un party, è un'esperienza sonora. Nato dall'esigenza di portare la vera attitudine del Rap e della Trap d'oltreoceano nei club, il collettivo ridefinisce le regole della notte. Con la direzione artistica e i suoni di Matthew Wrld & Difo, e spinto dalla vision di 2999, MP4 trasforma ogni set in un rituale immersivo. Dai bassi profondi dell'Hip Hop americano fino ai ritmi frenetici del Baile Funk e ai Club Edits più esclusivi, portiamo un'energia cruda e senza filtri direttamente in pista. From 23:00 till late: we run the club..</p>

      <Discover />
      
      <Event />
    </>
  );
}

export default Home;