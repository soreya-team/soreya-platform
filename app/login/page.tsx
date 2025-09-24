'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      if (user.email === form.email && user.password === form.password) {
        alert('Login successful!');
        window.location.href = '/dashboard';
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('No account found. Please sign up first.');
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <h1>soreya</h1>
        </div>
        
        <h2>Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="form">
          <input 
            name="email" 
            placeholder="Email" 
            type="email" 
            onChange={handleChange} 
            value={form.email} 
            required 
            className="input"
          />
          <input 
            name="password" 
            placeholder="Password" 
            type="password" 
            onChange={handleChange} 
            value={form.password} 
            required 
            className="input"
          />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background-color: #562633;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .login-card {
          background-color: #f3efdf;
          padding: 40px;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .logo h1 {
          color: #562633;
          font-size: 2rem;
          margin: 0 0 30px 0;
          text-align: center;
          font-weight: bold;
        }
        
        h2 {
          color: #562633;
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.5rem;
        }
        
        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .input {
          padding: 15px;
          border: 2px solid #562633;
          border-radius: 8px;
          font-size: 16px;
          background-color: white;
          color: #212121;
        }
        
        .input:focus {
          outline: none;
          border-color: #f10c45;
        }
        
        .btn {
          padding: 15px;
          background-color: #f10c45;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        
        .btn:hover {
          opacity: 0.9;
        }
        
        .signup-link {
          text-align: center;
          margin-top: 20px;
          color: #562633;
        }
        
        .signup-link a {
          color: #f10c45;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
