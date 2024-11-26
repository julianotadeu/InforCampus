/*import './App.css'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

export default App*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router basename="/InforCampus">
      <Routes>
        {/* Rota inicial */}
        <Route path="/" element={<Login />} />
        
        {/* Página inicial após login */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;




