import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="nav-header" role="banner">
      <div className="nav-brand">
        Civic<span style={{color: '#fff'}}>Reach</span>
      </div>
      <nav role="navigation" aria-label="Main Navigation">
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
          <li><Link to="/journey" aria-label="Learn about the Election Journey">The Journey</Link></li>
        </ul>
      </nav>
    </header>
  );
}
