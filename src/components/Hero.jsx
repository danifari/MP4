import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-kicker">MP4 // Y2K NIGHT SYSTEM</span>
        <h1 className="hero-title">
        <span className="word-group">
            <span className="word" style={{ '--i': 0 }}>M</span>
            <span className="word" style={{ '--i': 1 }}>P</span>
            <span className="word" style={{ '--i': 2 }}>4</span>
        </span>
        {' '}
        <span className="word-group">
            <span className="word" style={{ '--i': 3 }}>SESSION</span>
        </span>
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
