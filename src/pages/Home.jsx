import { ShieldCheck, Users, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container fadeIn">
      <section className="hero">
        <h1>CivicReach</h1>
        <p>Your interactive platform for Election Process Education. Discover how voting works, understand ballot structures, and test your knowledge interactively.</p>
        <Link to="/journey" className="btn-primary" aria-label="Start Election Journey">
          Start the Journey <ShieldCheck />
        </Link>
      </section>

      <section className="grid" aria-label="Features">
        <article className="card glass-panel">
          <Users size={32} color="#3b82f6" />
          <h3>Voter Registration</h3>
          <p>Learn the precise requirements and timelines necessary to legally register as a voter in your district.</p>
        </article>
        
        <article className="card glass-panel">
          <ShieldCheck size={32} color="#10b981" />
          <h3>The Ballot Box</h3>
          <p>Understand the security and anonymity behind the voting booth and how ballots are managed.</p>
        </article>
        
        <article className="card glass-panel">
          <Info size={32} color="#8b5cf6" />
          <h3>Counting Results</h3>
          <p>Follow the life of a ballot after it's cast, detailing the transparent tabulation process.</p>
        </article>
      </section>
    </div>
  );
}
