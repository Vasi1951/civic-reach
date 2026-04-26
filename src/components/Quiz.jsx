import { useState } from 'react';
import { Award, ChevronRight } from 'lucide-react';

const questions = [
  {
    q: "Who is eligible to vote in a general election?",
    options: ["Citizens over 18", "Anyone living in the country", "Only property owners", "Citizens over 21"],
    a: 0
  },
  {
    q: "What is the primary purpose of a ballot box?",
    options: ["To store ID cards", "To collect paper votes securely", "To register voters", "To count demographic data"],
    a: 1
  }
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx) => {
    if (idx === questions[currentQ].a) {
      setScore(score + 1);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
      // Fakes the network call that would normally crash
      console.log('Score saved to static mock DB', score + (idx === questions[currentQ].a ? 1 : 0));
    }
  };

  if (finished) {
    return (
      <div className="glass-panel quiz-container" aria-live="polite">
        <Award size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Quiz Complete!</h2>
        <p style={{ fontSize: '1.25rem' }}>You scored {score} out of {questions.length}</p>
        <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => {
          setCurrentQ(0);
          setScore(0);
          setFinished(false);
        }}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="glass-panel quiz-container" aria-live="polite">
      <h2 style={{ marginBottom: '2rem', color: '#3b82f6' }}>Question {currentQ + 1} of {questions.length}</h2>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{questions[currentQ].q}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {questions[currentQ].options.map((opt, i) => (
          <button 
            key={i} 
            className="option-btn"
            onClick={() => handleSelect(i)}
            aria-label={`Select option ${opt}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
