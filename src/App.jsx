import { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JourneyPage from './pages/JourneyPage';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <a href="#main-content" className="sr-only focusable">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="main-content" role="main">
          <Suspense fallback={<div aria-live="polite">Loading content...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journey" element={<JourneyPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
