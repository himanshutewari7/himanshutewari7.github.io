import { useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function UserForm({ user, setFormSubmitted }) {
  const [formData, setFormData] = useState({ level: '', goal: '', notes: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'users', user.uid), formData);
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 font-semibold">Tell us about your fitness journey</h2>
      <input type="text" placeholder="Level (Beginner/Intermediate/Advanced)" className="input" onChange={(e) => setFormData({ ...formData, level: e.target.value })} required />
      <input type="text" placeholder="Goal (e.g. Muscle gain)" className="input" onChange={(e) => setFormData({ ...formData, goal: e.target.value })} required />
      <textarea placeholder="Injuries, preferences, etc." className="input" onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Submit</button>
    </form>
  );
}