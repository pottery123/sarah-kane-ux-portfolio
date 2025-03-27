import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Aprender from './routes/Aprender';
import StateFair from './routes/StateFair';
import Somo from './routes/Somo';
import Resume from './routes/Resume';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="aprender" element={<Aprender />} />
          <Route path="statefair" element={<StateFair />} />
          <Route path="somo" element={<Somo />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
