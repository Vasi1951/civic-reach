import Quiz from '../components/Quiz';

export default function JourneyPage() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#10b981' }}>The Voting Journey</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Test your knowledge regarding civil democratic processes.</p>
      </div>
      
      <Quiz />
    </div>
  );
}
