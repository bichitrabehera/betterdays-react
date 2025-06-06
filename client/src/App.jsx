import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resources from './components/Resources';
import Assessment from './components/Assessment';
import Chatbot from './components/Chatbot';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
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
