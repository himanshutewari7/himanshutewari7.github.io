import { useState } from 'react';
import Login from './components/Login';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!user) return <Login setUser={setUser} />;
  if (!formSubmitted) return <UserForm user={user} setFormSubmitted={setFormSubmitted} />;
  return <Dashboard user={user} />;
}

export default App;