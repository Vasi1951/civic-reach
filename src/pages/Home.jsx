import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const ElectionJourney = lazy(() => import('../components/ElectionJourney'));

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">Participate. Empower. Vote.</h1>
          <p className="hero-subtitle">
            Understand the vital mechanics of the election process through our immersive, transparent, and interactive learning platform.
          </p>
          <button 
            type="button" 
            onClick={() => navigate('/journey')}
            aria-label="Start your educational journey on how elections work"
          >
            Start Your Journey
          </button>
        </div>
        <div className="canvas-container" aria-hidden="true">
          <Suspense fallback={<div style={{color: 'white', textAlign: 'center', marginTop: '20%'}}>Loading 3D Experience...</div>}>
            <ElectionJourney autoRotate />
          </Suspense>
        </div>
      </section>

      <section className="info-grid">
        <article className="glass-panel">
          <h2>Registration</h2>
          <p>Learn the criteria, required documents, and deadlines for voter registration in your constituency.</p>
        </article>
        <article className="glass-panel">
          <h2>The Ballot</h2>
          <p>Understand how polling stations operate, how EVMs or paper ballots work, and how your vote remains anonymous.</p>
        </article>
        <article className="glass-panel">
          <h2>The Results</h2>
          <p>Discover how votes are counted, the role of returning officers, and the declaration of election results.</p>
        </article>
      </section>
    </div>
  );
}
