'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mounted) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/adminbp'); // Redirige a la ruta /adminbp después del inicio de sesión exitoso
    } catch (error) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
      setTimeout(() => {
        setError(null);
      }, 2000); // Limpia el mensaje de error después de 2 segundos
    }
  };

  return (
    <div className='bg-white py-12 px-16'>
      <form onSubmit={handleSubmit} className="grid text-center bg-white border-[#114ca9] text-[#0c369c] gap-4 border-2  p-12 rounded-lg shadow-md">
        <div>
          <label htmlFor="email" className="block text-center font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 text-center py-2 bg-white rounded-md focus:outline-none focus:ring-2 border-2 border-[#114ca9] focus:ring-[#114ca9] "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className=" block font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 text-center py-2 bg-white rounded-md focus:outline-none focus:ring-2 border-2 border-[#114ca9] focus:ring-[#114ca9] "          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full border-2 border-[#114ca9] py-2 px-4 rounded-md transition duration-300 bg-[#114ca9] text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;