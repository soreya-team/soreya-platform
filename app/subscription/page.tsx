'use client';
import { useEffect, useState } from 'react';

export default function Subscription() {
  const [subscribed, setSubscribed] = useState(false);
  const [userType, setUserType] = useState('mentee');

  useEffect(() => {
    const stored = localStorage.getItem('userType');
    if (stored) setUserType(stored);
  }, []);

  // Dynamic mentor/mentee config:
  const isMentor = userType === 'mentor';

  const mentorFeatures = [
    'Mentor ambitious women entrepreneurs',
    'Widen your exposure as a coach',
    'Join Soreya-exclusive community events'
  ];
  const menteeFeatures = [
    'Access to mentor matching',
    'Request mentorship sessions',
    'Join Soreya-exclusive community events',
  ];

  const features = isMentor ? mentorFeatures : menteeFeatures;
  const price = isMentor ? '$20' : '$29';
  const badge = isMentor ? 'Mentor Membership' : 'Mentee Membership';

  function handleSubscribe() {
    alert('Processing payment...');
    setTimeout(() => {
      setSubscribed(true);
      localStorage.setItem('subscribed', 'true');
      alert('Welcome to Soreya Circle! 🎉');
      window.location.href = '/dashboard';
    }, 1500);
  }

  return (
    <div className="page-bg">
      <div className="sub-card">
        <h2>Join Soreya Circle</h2>
        <div style={{ marginBottom: 16 }}>
          <span className="user-type-badge">{badge}</span>
        </div>
        <div className="price">{price}<span className="per-month">/month</span></div>
        <ul className="features">
          {features.map((feature, i) => (
            <li key={i}>✓ {feature}</li>
          ))}
        </ul>
        {!subscribed ? (
          <button onClick={handleSubscribe} className="btn">Subscribe Now</button>
        ) : (
          <div className="success">
            ✅ You're subscribed!
          </div>
        )}
      </div>
      <style jsx>{`
        .page-bg {
          min-height: 100vh;
          background: #562633;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sub-card {
          background: #f3efdf;
          color: #212121;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 6px 24px rgba(33,33,33,0.09);
          text-align: center;
          min-width: 340px;
          border: 2px solid #f10c45;
        }
        h2 {
          margin-bottom: 30px;
          font-size: 2rem;
          color: #562633;
        }
        .user-type-badge {
          background: #562633;
          color: #f3efdf;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .price {
          color: #f10c45;
          font-size: 2.3rem;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .per-month {
          font-size: 1.1rem;
          color: #212121;
        }
        .features {
          list-style: none;
          padding: 0;
          margin: 26px 0 32px 0;
        }
        .features li {
          font-size: 1.08rem;
          margin: 10px 0;
          color: #212121;
        }
        .btn {
          background: #f10c45;
          color: #f3efdf;
          border: none;
          border-radius: 8px;
          padding: 16px 32px;
          font-size: 1.15rem;
          font-weight: bold;
          cursor: pointer;
        }
        .btn:hover {
          opacity: 0.95;
          background: #d00c39;
        }
        .success {
          color: #4caf50;
          font-size: 1.13rem;
          padding: 14px;
          margin-top: 20px;
          background: #f5f5f5;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
