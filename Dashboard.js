import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard({ user }) {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    async function fetchPlan() {
      const docRef = doc(db, 'plans', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setPlan(docSnap.data());
    }
    fetchPlan();
  }, [user]);

  if (!plan) return <div className="p-4">No workout plan assigned yet.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-bold">Your Weekly Plan</h2>
      {Object.entries(plan).map(([day, exercises]) => (
        <div key={day} className="mb-6">
          <h3 className="text-xl font-semibold capitalize">{day}</h3>
          <ul className="list-disc pl-6">
            {exercises.map((ex, i) => (
              <li key={i}>{ex.name} {ex.image && <img src={ex.image} alt={ex.name} className="w-32 h-32 object-cover" />}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}