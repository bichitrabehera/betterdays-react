import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resources from './components/Resources';
import Assessment from './components/Assessment';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-15"> {/* Add top padding to prevent overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
