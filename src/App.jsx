import Header from './components/Header';
import Home from './components/Home';
import Icons from './components/Icons';
import Grainient from './Grainient';

function App() {
  return(
    <>
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
    <main>
        <Home></Home>
    </main>
    <Icons></Icons>
    </>
  );
}

export default App
