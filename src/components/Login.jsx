import React, { useState } from 'react';
import customLogo from '../custom_logo.jpg';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [step, setStep] = useState('credentials'); // 'credentials' or 'otp'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fixed credentials
  const VALID_USER = 'Project-II/LKO';
  const VALID_PASS = 'Project@2026';
  const VALID_OTP = '2026';

  const handleCredentialSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      if (userId === VALID_USER && password === VALID_PASS) {
        setStep('otp');
      } else {
        setError('Invalid User ID or Password. Please try again.');
      }
    }, 1200);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      if (otp === VALID_OTP) {
        onLoginSuccess();
      } else {
        setError('Invalid OTP. Please try again.');
      }
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <div className="login-branding">
            <div className="login-logo-container">
              <img src={customLogo} alt="IR Logo" />
            </div>
            <h2>Indian Railways</h2>
            <p>Project-II Enterprise Portal</p>
          </div>
          <div className="login-illustration">
            <i className="fa-solid fa-train-subway"></i>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h3>{step === 'credentials' ? 'Welcome Back' : 'Verification Required'}</h3>
              <p>{step === 'credentials' ? 'Sign in to access the portal' : 'Enter the OTP sent to your registered mobile number'}</p>
            </div>

            {error && (
              <div className="login-error">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>{error}</span>
              </div>
            )}

            {step === 'credentials' ? (
              <form onSubmit={handleCredentialSubmit} className="login-form">
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <input 
                    type="text" 
                    required 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID" 
                  />
                </div>
                
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                  />
                  <div 
                    className="password-toggle" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </div>
                </div>

                <button type="submit" className="login-submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="spinner"><i className="fa-solid fa-circle-notch fa-spin"></i> Authenticating...</span>
                  ) : (
                    <span>Sign In <i className="fa-solid fa-arrow-right"></i></span>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="login-form">
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <input 
                    type="text" 
                    required 
                    maxLength="4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 4-digit OTP" 
                    autoFocus
                    style={{ letterSpacing: '8px', fontSize: '1.2rem', textAlign: 'center' }}
                  />
                </div>

                <button type="submit" className="login-submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="spinner"><i className="fa-solid fa-circle-notch fa-spin"></i> Verifying...</span>
                  ) : (
                    <span>Verify OTP <i className="fa-solid fa-check"></i></span>
                  )}
                </button>
                
                <div className="back-to-login" onClick={() => { setStep('credentials'); setOtp(''); setError(''); }}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Login
                </div>
              </form>
            )}
            
            <div className="login-footer">
              <p>Secure Enterprise Portal &copy; {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
