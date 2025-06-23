import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInForm = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Signed in successfully!");
      onSuccess(userCredential.user); // pass user info to parent
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 text-2xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>
        {message && <p className="text-center text-sm mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default SignInForm;
