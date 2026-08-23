import { useState, useEffect, useRef } from 'react';
import parentalAdvisory from '../../assets/Parental_Advisory.png';
import junglePreview from '../../assets/audio/jungle.mp3';
import hipHopPreview from '../../assets/audio/hip-hop.mp3';
import trapPreview from '../../assets/audio/trap.mp3';
import baileFunkPreview from '../../assets/audio/baile-funk.mp3';
import clubEditsPreview from '../../assets/audio/club-edits.mp3';
import './Discover.css';

const genres = ['JUNGLE', 'HIP HOP', 'TRAP', 'BAILE FUNK', 'CLUB EDITS'];
const extendedGenres = [genres[genres.length - 1], ...genres, genres[0]];

// Map each genre to its preview track. Swap these imports for your real files.
const genreAudio = {
  'JUNGLE': junglePreview,
  'HIP HOP': hipHopPreview,
  'TRAP': trapPreview,
  'BAILE FUNK': baileFunkPreview,
  'CLUB EDITS': clubEditsPreview,
};

function Discover() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [visualizerBars, setVisualizerBars] = useState(() => Array(16).fill(15));
  const isSnapping = useRef(false);
  const audioRef = useRef(null);

  const currentGenre = extendedGenres[currentIndex];

  const formatTime = (secs) => {
    if (!isFinite(secs) || secs <= 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

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
    // While a track is playing, the scroll is driven by the track ending
    // (see handleTrackEnded below) instead of this timer.
    if (isPlaying) return;
    const interval = setInterval(() => {
      nextGenre();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

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

  // Load the track for whichever genre is on screen, and keep playing
  // through the change if a track was already playing.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGenre]);

  // React to the Play/Pause buttons.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Keep the <audio> element's volume in sync with the slider.
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  // Track duration/elapsed time for the progress readout.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Pixelated "waveform" — jumps to new random bar heights while playing,
  // flattens out when paused.
  useEffect(() => {
    if (!isPlaying) {
      setVisualizerBars((prev) => prev.map(() => 15));
      return;
    }
    const interval = setInterval(() => {
      setVisualizerBars((prev) => prev.map(() => 15 + Math.random() * 85));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTrackEnded = () => {
    // The music finishing is what advances the carousel while playing.
    nextGenre();
  };

  return (
    <div className="discover" id="discover">
      <audio
        ref={audioRef}
        src={genreAudio[currentGenre]}
        onEnded={handleTrackEnded}
        preload="none"
      />
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
            <div className="visualizer" aria-hidden="true">
              {visualizerBars.map((height, i) => (
                <span
                  key={i}
                  className="visualizer-bar"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="progress-row">
              <span className="time-elapsed">{formatTime(currentTime)}</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <span className="time-duration">{formatTime(duration)}</span>
            </div>
            <div className="volume-row">
              <span className="volume-icon">VOL</span>
              <div className="volume-bar">
                <div className="volume-fill" style={{ width: `${volume * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            className={`center-button${isPlaying ? ' is-active' : ''}`}
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <span className="material-symbols-outlined">play_pause</span>
          </button>
          <button
            className="volume-up-button"
            onClick={() => setVolume((v) => Math.min(1, +(v + 0.1).toFixed(2)))}
            aria-label="Volume up"
          >
            +
          </button>
          <button
            className="volume-down-button"
            onClick={() => setVolume((v) => Math.max(0, +(v - 0.1).toFixed(2)))}
            aria-label="Volume down"
          >
            −
          </button>
          <button className="prev-track-button" onClick={prevGenre}>←</button>
          <button className="next-track-button" onClick={nextGenre}>→</button>
        </div>
      </div>
    </div>
  );
}

export default Discover;