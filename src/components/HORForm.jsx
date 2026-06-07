import React, { useState } from 'react';
import customLogo from '../custom_logo.jpg';

const FormContent = () => {
  const [shouldPrint, setShouldPrint] = useState(true);
  const [purposeOption, setPurposeOption] = useState('Urgent work');
  const [classOption, setClassOption] = useState('');
  
  return (
    <div className={`form-container ${!shouldPrint ? 'hide-in-print' : ''}`}>
      <div className="form-checkbox no-print" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        <label className="toggle-label" style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '600', color: shouldPrint ? '#0f172a' : '#64748b', cursor: 'pointer', background: shouldPrint ? '#ecfdf5' : '#f8fafc', padding: '5px 12px', borderRadius: '20px', border: `1px solid ${shouldPrint ? '#a7f3d0' : '#e2e8f0'}`, transition: 'all 0.2s ease' }}>
          <input 
            type="checkbox" 
            className="toggle-checkbox"
            checked={shouldPrint} 
            onChange={(e) => setShouldPrint(e.target.checked)} 
          />
          {shouldPrint ? 'Included in Print' : 'Excluded from Print'}
        </label>
      </div>

      <div className="header">
        <div className="sr-no-group">
          <label>Sr No:</label>
          <input type="text" className="sr-no-input" />
        </div>
        <img 
          src={customLogo} 
          alt="Indian Railways Logo" 
          className="logo"
        />
      </div>

      <div className="title" style={{ color: '#003366', fontSize: '15px', textTransform: 'uppercase', whiteSpace: 'nowrap', textAlign: 'center', margin: '15px 0', letterSpacing: '0.5px', fontWeight: 'bold' }}>
        Reservation against HOR Quota
      </div>

      <div className="form-group">
        <label>PNR:</label>
        <input type="text" className="form-input" onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }} />
      </div>

      <div className="form-group">
        <label>Train No:</label>
        <input type="text" maxLength="6" className="form-input" onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }} />
      </div>

      <div className="form-group">
        <label>Date of Journey:</label>
        <input type="date" className="form-input" />
      </div>

      <div className="form-group">
        <label>Class:</label>
        <select 
          className={`form-input select-input ${classOption === 'Other' ? 'no-print' : ''}`}
          value={classOption}
          onChange={(e) => setClassOption(e.target.value)}
          style={{ width: classOption === 'Other' ? 'auto' : '100%', flexGrow: classOption === 'Other' ? 0 : 1, marginRight: classOption === 'Other' ? '10px' : '0' }}
        >
          <option value=""></option>
          <option value="1A">1A - First AC</option>
          <option value="2A">2A - AC 2 Tier</option>
          <option value="3A">3A - AC 3 Tier</option>
          <option value="3E">3E - AC 3 Economy</option>
          <option value="EC">EC - Executive Chair Car</option>
          <option value="CC">CC - AC Chair Car</option>
          <option value="SL">SL - Sleeper Class</option>
          <option value="2S">2S - Second Sitting</option>
          <option value="GEN">GEN - General (Unreserved)</option>
          <option value="Other">Other</option>
        </select>
        {classOption === 'Other' && (
          <input type="text" className="form-input" autoFocus placeholder="Enter class manually" />
        )}
      </div>

      <div className="row">
        <div className="form-group">
          <label>From:</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>To:</label>
          <input type="text" className="form-input" />
        </div>
      </div>

      <div className="form-group">
        <label>No. Of berth:</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-input" />
      </div>
      
      <div className="form-group indent-group">
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label>Purpose:</label>
        <select 
          className={`form-input select-input ${purposeOption === 'Other' ? 'no-print' : ''}`} 
          value={purposeOption}
          onChange={(e) => setPurposeOption(e.target.value)}
          style={{ width: purposeOption === 'Other' ? 'auto' : '100%', flexGrow: purposeOption === 'Other' ? 0 : 1, marginRight: purposeOption === 'Other' ? '10px' : '0' }}
        >
          <option value="Urgent work">Urgent work</option>
          <option value="Other">Other</option>
        </select>
        {purposeOption === 'Other' && (
          <input type="text" className="form-input" autoFocus placeholder="Enter purpose manually" />
        )}
      </div>

      <div className="form-group" style={{ alignItems: 'center' }}>
        <label style={{ fontSize: '0.85em', whiteSpace: 'nowrap', marginRight: '10px', textAlign: 'right', lineHeight: '1.3' }}>
          Reference with<br/>Mob. No:
        </label>
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <input type="text" className="form-input" style={{ width: '100%', marginBottom: '8px' }} />
          <input type="text" className="form-input" style={{ width: '100%' }} />
        </div>
      </div>

      <div className="form-group">
        <label>Mob. No. Of Passenger:</label>
        <input type="tel" className="form-input" onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
          if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
        }} />
      </div>

      <div className="footer">
        <div className="footer-left" style={{ display: 'flex', alignItems: 'flex-end' }}>
          Sr. DCM/LKO
        </div>
        <div className="footer-right">
          <div style={{ height: '35px', display: 'block', width: '100%' }}>&nbsp;</div>
          <div>Saurabh Tiwari</div>
          <div>Dy CSTE/Project-II/LKO</div>
          <div>Mob.9794833819</div>
        </div>
      </div>
    </div>
  );
};

const HORForm = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <div className="portal-header no-print">
        <div className="portal-header-left">
          <div className="portal-logo-container">
            <img src={customLogo} alt="IR Logo" className="portal-logo" />
          </div>
          <div className="portal-title">
            <h1>Indian Railways</h1>
            <p>HOR Quota Reservation System</p>
          </div>
        </div>
        <div className="portal-header-right" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <div className="office-address" style={{ textAlign: 'right', fontSize: '12.5px', color: '#e2e8f0', lineHeight: '1.4', letterSpacing: '0.3px', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '25px' }}>
            <div style={{ fontWeight: '600', color: '#ffffff', letterSpacing: '0.5px' }}>Office of Dy. CSTE/P-II</div>
            <div>DRM, Hazartganj,</div>
            <div>N.Rly, Lucknow</div>
          </div>
          <button className="print-btn" onClick={handlePrint} style={{ marginRight: '10px' }}>
            <span className="print-icon">🖨️</span> Generate Print
          </button>
          <button className="print-btn" onClick={onBack} style={{ background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', boxShadow: 'none' }}>
            <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i> Back
          </button>
        </div>
      </div>

      <div className="print-only-date">
        {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </div>

      <div className="forms-wrapper">
        <FormContent />
        <FormContent />
        <FormContent />
      </div>
    </div>
  );
};

export default HORForm;
