import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-kicker">MP4 // Y2K NIGHT SYSTEM</span>
        <h1 className="hero-title">
          <span className="word">NEON</span>
          <span className="word">CHROME</span>
          <span className="word">SOUND</span>
          <span className="word">SYSTEM</span>
        </h1>
        <p className="hero-subtitle">
          Rap, trap e club energy con un'estetica glossy, velocissima e senza compromessi.
        </p>
        <div className="hero-actions">
          <a className="hero-cta" href="#discover">Enter the set</a>
          <span className="hero-note">23:00 till late</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-cd"></div>
      </div>
    </section>
  );
}

export default Hero;
