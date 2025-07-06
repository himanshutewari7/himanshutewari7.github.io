import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login({ setUser }) {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Viroc</h1>
      <button
        onClick={handleLogin}
        className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100"
      >
        Sign in with Google
      </button>
    </div>
  );
}