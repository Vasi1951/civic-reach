import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JourneyPage from './pages/Journey';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <a href="#main-content" className="sr-only">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<JourneyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
