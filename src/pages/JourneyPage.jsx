import { Suspense } from 'react';
import ElectionJourney from '../components/ElectionJourney';

export default function JourneyPage() {
  return (
    <div className="journey-page" style={{ padding: '2rem 0' }}>
      <h1>The Election Journey</h1>
      <p style={{ maxWidth: '800px', marginBottom: '2rem', color: 'var(--text-muted)' }}>
        Interact with the 3D model below to visualize the different stages of the election process. 
        Drag to rotate the view. This fully accessible simulation provides a transparent look at how democracies function.
      </p>
      
      <div className="canvas-container" style={{ height: '600px' }}>
        <Suspense fallback={<div>Loading Interactive Experience...</div>}>
          <ElectionJourney autoRotate={false} />
        </Suspense>
      </div>
      
      <div className="glass-panel" style={{ marginTop: '3rem' }}>
        <h2>Did you know?</h2>
        <p>
          Electronic Voting Machines (EVMs) used in many countries are standalone, non-networked machines to prevent cyber tampering. 
          Paper trails (VVPAT) are often added to verify the electronic vote in a physically auditable format!
        </p>
      </div>
    </div>
  );
}
