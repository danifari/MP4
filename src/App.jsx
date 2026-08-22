import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Icons from './components/Icons';
import Footer from './components/Footer';
import Grainient from './Grainient';

const MIN_LOADER_TIME = 350;
const MAX_IMAGE_WAIT = 7000;

function App() {
  const location = useLocation();
  const mainRef = useRef(null);
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    let isCancelled = false;
    const startedAt = performance.now();

    setIsRouteLoading(true);

    const mainElement = mainRef.current;
    if (!mainElement) {
      setIsRouteLoading(false);
      return undefined;
    }

    const images = Array.from(mainElement.querySelectorAll('img'));
    let pendingCount = 0;
    const cleanups = [];

    const finishLoading = () => {
      if (isCancelled) return;

      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

      window.setTimeout(() => {
        if (!isCancelled) {
          setIsRouteLoading(false);
        }
      }, remaining);
    };

    images.forEach((img) => {
      if (img.complete) {
        img.classList.remove('img-pending');
        img.classList.add('img-ready');
        return;
      }

      pendingCount += 1;
      img.classList.remove('img-ready');
      img.classList.add('img-pending');

      const onDone = () => {
        img.classList.remove('img-pending');
        img.classList.add('img-ready');
        pendingCount -= 1;
        if (pendingCount <= 0) {
          finishLoading();
        }
      };

      img.addEventListener('load', onDone, { once: true });
      img.addEventListener('error', onDone, { once: true });

      cleanups.push(() => {
        img.removeEventListener('load', onDone);
        img.removeEventListener('error', onDone);
      });
    });

    if (pendingCount === 0) {
      finishLoading();
    }

    const fallback = window.setTimeout(() => {
      finishLoading();
    }, MAX_IMAGE_WAIT);

    return () => {
      isCancelled = true;
      window.clearTimeout(fallback);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [location.pathname]);

  return(
    <>
    <div className={`route-loader ${isRouteLoading ? 'route-loader--visible' : ''}`} aria-hidden={!isRouteLoading}>
      <div className="route-loader__spinner" />
    </div>
    <Header></Header>
    <div style={{ position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1, }}>
      <Grainient
        color1="#000000"
        color2="#000000"
        color3="#EC4899"
        timeSpeed={3.95}
        colorBalance={0.37}
        warpStrength={1}
        warpFrequency={6.9}
        warpSpeed={2}
        warpAmplitude={60}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>
    <main ref={mainRef}>
        <Outlet />
        <Footer></Footer>
    </main>
    <Icons></Icons>
    </>
  );
}

export default App