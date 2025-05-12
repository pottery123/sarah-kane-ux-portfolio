import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Resume from './routes/Resume.jsx';
import Somo from './routes/Somo.jsx';
import Aprender from './routes/Aprender.jsx';
import StateFair from './routes/StateFair.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
      <Route path='aprender' element={<Aprender />} />
      <Route path='somo' element={<Somo />} />
      <Route path='state-fair' element={<StateFair />} />
    </Routes>
  </BrowserRouter>
)
