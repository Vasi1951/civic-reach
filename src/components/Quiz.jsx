import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, limit, query, orderBy } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const q = query(collection(db, 'scores'), orderBy('score', 'desc'), limit(5));
        const querySnapshot = await getDocs(q);
        const scores = [];
        querySnapshot.forEach((doc) => {
          scores.push({ id: doc.id, ...doc.data() });
        });
        setLeaderboard(scores);
      } catch (e) {
        console.error("Error fetching leaderboard: ", e);
      }
    }
    fetchLeaderboard();
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'scores'), {
        score: score,
        timestamp: new Date()
      });
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="quiz-section glass-panel" aria-labelledby="quiz-heading">
      <h2 id="quiz-heading">Knowledge Test</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} aria-label="Election Quiz Form">
          <fieldset>
            <legend>What age are you eligible to vote?</legend>
            <label>
              <input type="radio" name="age" value="18" onChange={() => setScore(100)} required />
              18 Years
            </label>
            <label>
              <input type="radio" name="age" value="16" onChange={() => setScore(0)} />
              16 Years
            </label>
            <label>
              <input type="radio" name="age" value="21" onChange={() => setScore(0)} />
              21 Years
            </label>
          </fieldset>
          <button type="submit" disabled={loading} aria-busy={loading}>
            {loading ? 'Submitting...' : 'Submit Answers'}
          </button>
        </form>
      ) : (
        <div className="leaderboard" aria-live="polite">
          <h3>Your Score: {score}%</h3>
          <h4>Recent Top Scorers</h4>
          <ul>
            {leaderboard.map((entry) => (
              <li key={entry.id}>Score: {entry.score}% - {entry.timestamp?.toDate().toLocaleDateString() || 'Just now'}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
