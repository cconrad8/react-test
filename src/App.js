import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Installation from './pages/Installation';
import Usage from './pages/Usage';
import Api from './pages/Api';
import Resource from './pages/Resource'
import Observation from './pages/Observation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/usage" element={<Usage />} />
              <Route path="/api" element={<Api />} />
              <Route path="/submit-observation" element={<Observation />} />
              <Route path="/submit-resource" element={<Resource />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
