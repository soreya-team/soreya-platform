'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    business: '',
    goals: '',
    userType: '', // 'mentee' or 'mentor'
    profilePicture: null
  });

  const [step, setStep] = useState(1);

  function handleChange(e: any) {
    const { name, value, files } = e.target;
    setForm({ 
      ...form, 
      [name]: files ? files[0] : value 
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (step === 1) {
      setStep(2); // Go to user type selection
    } else if (step === 2) {
      setStep(3); // Go to profile creation
    } else {
      // Save user data with type
      localStorage.setItem('userData', JSON.stringify(form));
      localStorage.setItem('userType', form.userType);
      alert('Account created successfully!');
      window.location.href = '/subscription';
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="logo">
          <h1>soreya</h1>
        </div>
        
        <h2>{step === 1 ? 'Create Account' : step === 2 ? 'Choose Your Path' : 'Complete Your Profile'}</h2>
        
        <form onSubmit={handleSubmit} className="form">
          {step === 1 && (
            <>
              <input 
                name="name" 
                placeholder="Full Name" 
                type="text" 
                onChange={handleChange} 
                value={form.name} 
                required 
                className="input"
              />
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
            </>
          )}

          {step === 2 && (
            <div className="user-type-selection">
              <div className="type-option">
                <input 
                  type="radio" 
                  id="mentee" 
                  name="userType" 
                  value="mentee" 
                  onChange={handleChange}
                  required
                />
                <label htmlFor="mentee" className="type-card">
                  <h3>I want to gain mentorship</h3>
                  <p>Connect with experienced mentors to grow your business and skills</p>
                </label>
              </div>
              
              <div className="type-option">
                <input 
                  type="radio" 
                  id="mentor" 
                  name="userType" 
                  value="mentor" 
                  onChange={handleChange}
                  required
                />
                <label htmlFor="mentor" className="type-card">
                  <h3>I want to give mentorship</h3>
                  <p>Share your expertise and help others succeed in their journey</p>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <>
              <textarea 
                name="business" 
                placeholder={form.userType === 'mentor' ? "Tell us about your expertise and background" : "What's your business about?"} 
                onChange={handleChange} 
                value={form.business} 
                required 
                className="input textarea"
              />
              <textarea 
                name="goals" 
                placeholder={form.userType === 'mentor' ? "How do you want to help others?" : "What are you seeking from Soreya?"} 
                onChange={handleChange} 
                value={form.goals} 
                required 
                className="input textarea"
              />
              <input 
                name="profilePicture" 
                type="file" 
                onChange={handleChange} 
                accept="image/*"
                className="input"
              />
            </>
          )}
          
          <button type="submit" className="btn btn-primary">
            {step === 1 ? 'Next' : step === 2 ? 'Continue' : 'Create Account'}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>

      <style jsx>{`
        .signup-container {
          min-height: 100vh;
          background-color: #562633;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .signup-card {
          background-color: #f3efdf;
          padding: 40px;
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
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
        
        .textarea {
          min-height: 80px;
          resize: vertical;
        }
        
        .user-type-selection {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .type-option input[type="radio"] {
          display: none;
        }
        
        .type-card {
          display: block;
          padding: 20px;
          border: 2px solid #562633;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: white;
        }
        
        .type-card:hover {
          background-color: #f10c45;
          color: white;
        }
        
        .type-option input[type="radio"]:checked + .type-card {
          background-color: #f10c45;
          color: white;
          border-color: #f10c45;
        }
        
        .type-card h3 {
          margin: 0 0 10px 0;
          color: inherit;
        }
        
        .type-card p {
          margin: 0;
          color: inherit;
          opacity: 0.8;
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
        
        .login-link {
          text-align: center;
          margin-top: 20px;
          color: #562633;
        }
        
        .login-link a {
          color: #f10c45;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
