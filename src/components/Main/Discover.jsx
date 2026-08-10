import { useState, useEffect, useRef } from 'react';
import parentalAdvisory from '../../assets/Parental_Advisory.png';
import './Discover.css';

const genres = ['JUNGLE', 'HIP HOP', 'TRAP', 'BAILE FUNK', 'CLUB EDITS'];
const extendedGenres = [genres[genres.length - 1], ...genres, genres[0]];

function Discover() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const isSnapping = useRef(false);

  const nextGenre = () => {
    if (isSnapping.current) return;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevGenre = () => {
    if (isSnapping.current) return;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextGenre();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const isOnCloneAtEnd = currentIndex >= extendedGenres.length - 1;
    const isOnCloneAtStart = currentIndex <= 0;

    if (isOnCloneAtEnd || isOnCloneAtStart) {
      isSnapping.current = true;
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(isOnCloneAtEnd ? 1 : genres.length);
        isSnapping.current = false;
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  return (
    <div className="discover" id="discover">
      <div className="box1">
        <span className="eyebrow">MP4 Sound System</span>
        <h2 className="genreh">CHECK OUT OUR SOUND</h2>
        <img src={parentalAdvisory} alt="Explicit content" className="parentalAdvisory" />
      </div>
      <div className="ipod">
        <div className="screen">
          <span className="screen-brand">MP4</span>
          <div className="content">
            <span className="now-playing-label">Now Playing</span>
            <div className="track-info">
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
          <div className="center-button"></div>
          <button className="play-button">Play</button>
          <button className="pause-button">Pause</button>
          <button className="prev-track-button" onClick={prevGenre}>←</button>
          <button className="next-track-button" onClick={nextGenre}>→</button>
        </div>
      </div>
    </div>
  );
}

export default Discover;
