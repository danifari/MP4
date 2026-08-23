import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home'
import Radio from './components/Radio'
import Events from './components/Events'
import Pit from './components/Pit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="radio" element={<Radio />} />
          <Route path="events" element={<Events />} />
          <Route path="pit" element={<Pit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)