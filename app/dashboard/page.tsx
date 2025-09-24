'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [userType, setUserType] = useState<string>('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const userTypeData = localStorage.getItem('userType');
    const subscriptionStatus = localStorage.getItem('subscribed');
    
    if (userData) {
      setUser(JSON.parse(userData));
    }
    
    if (userTypeData) {
      setUserType(userTypeData);
    }
    
    setSubscribed(subscriptionStatus === 'true');
  }, []);

  if (!user) {
    return (
      <div className="container">
        <h1>Please login first</h1>
        <a href="/login" className="btn">Go to Login</a>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h2>soreya</h2>
        </div>
        
        <div className="nav-section">
          <h3>Your Journey</h3>
          <div className="nav-item active">Dashboard</div>
          {userType === 'mentee' && (
            <>
              <div className="nav-item">My Mentors <span className="badge">2</span></div>
              <div className="nav-item">Messages <span className="badge">5</span></div>
              <div className="nav-item">Goals & Progress</div>
            </>
          )}
          {userType === 'mentor' && (
            <>
              <div className="nav-item">My Mentees <span className="badge">8</span></div>
              <div className="nav-item">Messages <span className="badge">12</span></div>
              <div className="nav-item">Availability</div>
            </>
          )}
        </div>

        <div className="nav-section">
          <h3>Community</h3>
          <div className="nav-item">Upcoming Events <span className="badge">3</span></div>
          <div className="nav-item">Discussion Groups</div>
          <div className="nav-item">Success Stories</div>
        </div>

        <div className="nav-section">
          <h3>Resources</h3>
          <div className="nav-item">Toolkit</div>
          <div className="nav-item">Templates</div>
          <div className="nav-item">Learning Path</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>
            {userType === 'mentee' ? `Welcome back, ${user.name}! 👋` : `Your Mentoring Dashboard 🌟`}
          </h1>
          {userType === 'mentee' && (
            <button className="btn btn-primary">Find New Mentor</button>
          )}
          {userType === 'mentor' && (
            <button className="btn btn-primary">Update Availability</button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {userType === 'mentee' ? (
            <>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Mentors</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Sessions Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Goals Achieved</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Community Rating</div>
              </div>
            </>
          ) : (
            <>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Active Mentees</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">47</div>
                <div className="stat-label">Sessions This Month</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">156</div>
                <div className="stat-label">Total Impact Hours</div>
              </div>
            </>
          )}
        </div>

        {userType === 'mentee' && (
          <>
            {/* Quick Actions */}
            <div className="section-card">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button className="action-btn">Book Mentoring Session</button>
                <button className="action-btn">Join Discussion</button>
                <button className="action-btn">Update Goals</button>
                <button className="action-btn">Share Success</button>
              </div>
            </div>

            {/* Recommended Mentors */}
            <div className="section-card">
              <h2>Recommended Mentors</h2>
              <div className="mentors-grid">
                <div className="mentor-card">
                  <div className="mentor-avatar">MJ</div>
                  <div className="mentor-info">
                    <h3>Maria Johnson</h3>
                    <p>Serial Entrepreneur & Tech Founder</p>
                    <p className="mentor-bio">3x successful exits in fintech. Passionate about helping women break into traditionally male-dominated industries.</p>
                    <div className="mentor-tags">
                      <span className="tag">Fintech</span>
                      <span className="tag">Fundraising</span>
                      <span className="tag">Scale-up</span>
                    </div>
                    <div className="match-rate">92% Match</div>
                  </div>
                  <div className="mentor-actions">
                    <button className="btn btn-primary">Connect</button>
                    <button className="btn btn-secondary">View Profile</button>
                  </div>
                </div>

                <div className="mentor-card">
                  <div className="mentor-avatar">AL</div>
                  <div className="mentor-info">
                    <h3>Anna Liu</h3>
                    <p>E-commerce & Digital Marketing Expert</p>
                    <p className="mentor-bio">Built her online fashion brand from $0 to $2M revenue. Specializes in sustainable business practices and customer experience.</p>
                    <div className="mentor-tags">
                      <span className="tag">E-commerce</span>
                      <span className="tag">Digital Marketing</span>
                      <span className="tag">Sustainability</span>
                    </div>
                    <div className="match-rate">87% Match</div>
                  </div>
                  <div className="mentor-actions">
                    <button className="btn btn-primary">Connect</button>
                    <button className="btn btn-secondary">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {userType === 'mentor' && (
          <>
            {/* Connection Requests */}
            <div className="section-card">
              <h2>Connection Requests</h2>
              <div className="requests-grid">
                <div className="request-card">
                  <div className="request-avatar">JD</div>
                  <div className="request-info">
                    <h3>Jessica Davis</h3>
                    <p>Health & Wellness Startup</p>
                    <p className="challenge"><strong>Challenge:</strong> "I'm struggling with product-market fit for my wellness app. I have users but low engagement. Would love guidance on customer research and iteration strategies."</p>
                    <div className="request-tags">
                      <span className="tag">Product Development</span>
                      <span className="tag">User Research</span>
                      <span className="tag">Health Tech</span>
                    </div>
                  </div>
                  <span className="urgent-badge">New</span>
                  <div className="request-actions">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-secondary">Schedule Chat</button>
                  </div>
                </div>

                <div className="request-card">
                  <div className="request-avatar">KM</div>
                  <div className="request-info">
                    <h3>Keiko Martinez</h3>
                    <p>Sustainable Fashion Brand</p>
                    <p className="challenge"><strong>Challenge:</strong> "Last-minute quality control issues with sourced materials—desperately need advice on troubleshooting without delaying our launch."</p>
                    <div className="request-tags">
                      <span className="tag">Supply Chain</span>
                      <span className="tag">Ethical Sourcing</span>
                      <span className="tag">Product Launch</span>
                    </div>
                  </div>
                  <span className="urgent-badge urgent">Urgent</span>
                  <div className="request-actions">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-secondary">Schedule Chat</button>
                  </div>
                </div>
              </div>
            </div>

            {/* This Week's Sessions */}
            <div className="section-card">
              <h2>This Week's Sessions</h2>
              <div className="sessions-grid">
                <div className="session-card">
                  <div className="session-avatar">SR</div>
                  <div className="session-info">
                    <h3>Sophie Richardson</h3>
                    <p>Next Session: Thu 2:00 PM</p>
                    <p><strong>Focus Area:</strong> Scaling operations and hiring her first employees. Working through leadership transition challenges.</p>
                  </div>
                </div>

                <div className="session-card">
                  <div className="session-avatar">LT</div>
                  <div className="session-info">
                    <h3>Lisa Thompson</h3>
                    <p>Next Session: Fri 10:00 AM</p>
                    <p><strong>Focus Area:</strong> Digital marketing strategy for her consulting business. Working on content strategy and client acquisition.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Events Section (both user types) */}
        <div className="section-card">
          <h2>Upcoming Community Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <div className="date-day">11</div>
                <div className="date-month">NOV</div>
              </div>
              <div className="event-info">
                <h3>Nail Your Personal Brand</h3>
                <p>6:00 PM - 8:00 PM • Virtual</p>
                <p>Craft a standout personal brand that highlights your unique strengths with Suz's expert insights. Boost your business impact and attract your ideal clients with confidence.</p>
                <div className="event-attendees">
                  <div className="attendee-avatars">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                  </div>
                  <span>24 attending</span>
                </div>
              </div>
              <div className="event-actions">
                <button className="btn btn-primary">Join Event</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <div className="date-day">25</div>
                <div className="date-month">NOV</div>
              </div>
              <div className="event-info">
                <h3>Clay & Connection</h3>
                <p>9:00 AM - 11:00 AM • Melbourne CBD</p>
                <p>Get hands-on, get refreshed. Create pottery, unwind, and nourish genuine connections with fellow business owners in a relaxed, inspiring space.</p>
                <div className="event-attendees">
                  <div className="attendee-avatars">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                  </div>
                  <span>12 attending</span>
                </div>
              </div>
              <div className="event-actions">
                <button className="btn btn-primary">Join Event</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background-color: #f3efdf;
        }
        
        .sidebar {
          width: 280px;
          background-color: #f3efdf;
          padding: 20px;
          border-right: 1px solid #ddd;
        }
        
        .logo h2 {
          color: #f10c45;
          margin: 0 0 40px 0;
          font-size: 1.8rem;
        }
        
        .nav-section {
          margin-bottom: 30px;
        }
        
        .nav-section h3 {
          color: #212121;
          font-size: 0.9rem;
          margin: 0 0 15px 0;
          text-transform: uppercase;
          font-weight: bold;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          margin: 5px 0;
          border-radius: 8px;
          cursor: pointer;
          color: #562633;
          transition: all 0.2s ease;
        }
        
        .nav-item:hover {
          background-color: rgba(241, 12, 69, 0.1);
        }
        
        .nav-item.active {
          background-color: #f10c45;
          color: white;
        }
        
        .badge {
          background-color: #f10c45;
          color: white;
          border-radius: 12px;
          padding: 2px 8px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .nav-item.active .badge {
          background-color: white;
          color: #f10c45;
        }
        
        .main-content {
          flex: 1;
          background-color: #562633;
          padding: 30px;
          overflow-y: auto;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .header h1 {
          color: #f3efdf;
          margin: 0;
          font-size: 2rem;
        }
        
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
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
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .stat-card {
          background-color: #f3efdf;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #562633;
          margin-bottom: 10px;
        }
        
        .stat-label {
          color: #212121;
          font-size: 1.1rem;
        }
        
        .section-card {
          background-color: #f3efdf;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
        }
        
        .section-card h2 {
          color: #562633;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
        }
        
        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .action-btn {
          padding: 15px;
          background-color: transparent;
          color: #562633;
          border: 2px solid #562633;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        
        .action-btn:hover {
          background-color: #562633;
          color: white;
        }
        
        .mentors-grid, .requests-grid, .events-grid {
          display: grid;
          gap: 20px;
        }
        
        .mentor-card, .request-card, .event-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: start;
          padding: 20px;
          background-color: white;
          border-radius: 12px;
          border: 2px solid #562633;
        }
        
        .mentor-avatar, .request-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #562633;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .mentor-info h3, .request-info h3 {
          margin: 0 0 5px 0;
          color: #212121;
          font-size: 1.2rem;
        }
        
        .mentor-info p, .request-info p {
          margin: 5px 0;
          color: #562633;
        }
        
        .mentor-bio, .challenge {
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .mentor-tags, .request-tags {
          display: flex;
          gap: 8px;
          margin: 10px 0;
        }
        
        .tag {
          background-color: #f3efdf;
          color: #562633;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .match-rate {
          background-color: #562633;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          display: inline-block;
          margin-top: 10px;
        }
        
        .urgent-badge {
          background-color: #4caf50;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          align-self: start;
        }
        
        .urgent-badge.urgent {
          background-color: #f10c45;
        }
        
        .mentor-actions, .request-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .sessions-grid {
          display: grid;
          gap: 15px;
        }
        
        .session-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background-color: white;
          border-radius: 12px;
        }
        
        .session-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #562633;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .session-info h3 {
          margin: 0 0 5px 0;
          color: #212121;
        }
        
        .session-info p {
          margin: 5px 0;
          color: #562633;
        }
        
        .event-card {
          grid-template-columns: auto 1fr auto;
        }
        
        .event-date {
          background-color: #f10c45;
          color: white;
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          min-width: 80px;
        }
        
        .date-day {
          font-size: 1.8rem;
          font-weight: bold;
        }
        
        .date-month {
          font-size: 0.9rem;
          font-weight: bold;
        }
        
        .event-info h3 {
          margin: 0 0 5px 0;
          color: #212121;
          font-size: 1.2rem;
        }
        
        .event-info p {
          margin: 5px 0;
          color: #562633;
        }
        
        .event-attendees {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }
        
        .attendee-avatars {
          display: flex;
          margin-right: 10px;
        }
        
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #562633;
          margin-left: -8px;
          border: 2px solid white;
        }
        
        .avatar:first-child {
          margin-left: 0;
        }
        
        .event-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
