import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/aprender">Aprender</Link>
        <Link to="/statefair">StateFair</Link>
        <Link to="/somo">Somo</Link>
        <Link to="/Resume">Resuem</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
