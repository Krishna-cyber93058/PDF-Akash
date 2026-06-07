import React, { useState, useEffect } from 'react';
import customLogo from '../custom_logo.jpg';
import './Dashboard.css';

const Dashboard = ({ onLogout, onGenerateForm }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="dashboard-wrapper">
      <div className="portal-header no-print" style={{ marginBottom: '0', borderRadius: '0' }}>
        <div className="portal-header-left">
          <div className="portal-logo-container" style={{ width: '50px', height: '50px' }}>
            <img src={customLogo} alt="IR Logo" className="portal-logo" style={{ maxHeight: '35px' }} />
          </div>
          <div className="portal-title">
            <h1 style={{ fontSize: '20px' }}>Indian Railways</h1>
            <p style={{ fontSize: '12px' }}>Project-II Portal Dashboard</p>
          </div>
        </div>
        <div className="portal-header-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="office-address" style={{ textAlign: 'right', fontSize: '12px', color: '#e2e8f0', lineHeight: '1.4', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '20px' }}>
            <div style={{ fontWeight: '600', color: '#ffffff' }}>Project-II User</div>
            <div>LKO Division</div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-welcome">
          <div>
            <h2>Welcome back, <span>Project-II User</span></h2>
            <p>Here is what's happening with your projects today.</p>
          </div>
          <div className="dashboard-time">
            <div className="time">{formattedTime}</div>
            <div className="date">{formattedDate}</div>
          </div>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <div className="stat-details">
              <h3>Total Projects</h3>
              <p>124</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <i className="fa-solid fa-list-check"></i>
            </div>
            <div className="stat-details">
              <h3>Active Tasks</h3>
              <p>42</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div className="stat-details">
              <h3>Pending Tasks</h3>
              <p>18</p>
            </div>
          </div>
        </div>

        <div className="dashboard-actions">
          <div className="action-card" onClick={onGenerateForm}>
            <div className="action-icon">
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <h3>Generate HOR Quota Form</h3>
            <p>Create, manage, and print official HOR Quota reservation forms.</p>
            <div className="action-arrow"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          
          <div className="action-card disabled">
            <div className="action-icon" style={{ background: '#f1f5f9', color: '#94a3b8' }}>
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3>Project Analytics</h3>
            <p>View detailed reports and analytics for all ongoing projects.</p>
            <div className="action-badge">Coming Soon</div>
          </div>

          <div className="action-card disabled">
            <div className="action-icon" style={{ background: '#f1f5f9', color: '#94a3b8' }}>
              <i className="fa-solid fa-users-gear"></i>
            </div>
            <h3>Staff Management</h3>
            <p>Manage project staff, roles, and administrative approvals.</p>
            <div className="action-badge">Coming Soon</div>
          </div>
        </div>

        <div className="dashboard-recent">
          <div className="recent-header">
            <h3>Recent Activity</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="recent-list">
            <div className="recent-item">
              <div className="recent-icon success"><i className="fa-solid fa-check"></i></div>
              <div className="recent-info">
                <h4>HOR Form Generated</h4>
                <p>Train No: 12429 | PNR: 2439581023</p>
              </div>
              <div className="recent-time">10 mins ago</div>
            </div>
            <div className="recent-item">
              <div className="recent-icon primary"><i className="fa-solid fa-pen"></i></div>
              <div className="recent-info">
                <h4>Project Plan Updated</h4>
                <p>Signaling upgrade for Lucknow Division.</p>
              </div>
              <div className="recent-time">2 hours ago</div>
            </div>
            <div className="recent-item">
              <div className="recent-icon warning"><i className="fa-solid fa-bell"></i></div>
              <div className="recent-info">
                <h4>Approval Pending</h4>
                <p>Material requisition for Phase II is awaiting review.</p>
              </div>
              <div className="recent-time">Yesterday</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
