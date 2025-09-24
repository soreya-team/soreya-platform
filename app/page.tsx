'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="logo">
          <h1>soreya</h1>
        </div>
        
        <h2>Your premier mentorship matching platform</h2>
        <p>Connect with experienced mentors or share your expertise to help others grow</p>
        
        <div className="nav-buttons">
          <Link href="/signup" className="btn btn-primary">Get Started</Link>
          <Link href="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #562633 0%, #212121 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .hero-section {
          text-align: center;
          color: #f3efdf;
          max-width: 600px;
        }
        
        .logo h1 {
          font-size: 4rem;
          margin: 0 0 30px 0;
          color: #f10c45;
          font-weight: bold;
        }
        
        h2 {
          font-size: 2rem;
          margin: 0 0 20px 0;
          color: #f3efdf;
        }
        
        p {
          font-size: 1.2rem;
          margin: 0 0 40px 0;
          color: #f3efdf;
          opacity: 0.9;
        }
        
        .nav-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        
        .btn {
          display: inline-block;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.1rem;
          transition: opacity 0.3s ease;
        }
        
        .btn-primary {
          background-color: #f10c45;
          color: white;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #f3efdf;
          border: 2px solid #f3efdf;
        }
        
        .btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
