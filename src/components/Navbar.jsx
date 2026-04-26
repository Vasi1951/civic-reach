import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel" aria-label="Main Navigation">
      <Link to="/" className="nav-brand" aria-label="CivicReach Home">
        <Vote size={28} />
        <span>CivicReach</span>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/journey">Election Journey</Link>
      </div>
    </nav>
  );
}
