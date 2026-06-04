import React, { useState } from 'react';
import './App.css';
import customLogo from './custom_logo.jpg';

const FormContent = () => {
  const [shouldPrint, setShouldPrint] = useState(true);
  
  return (
    <div className={`form-container ${!shouldPrint ? 'hide-in-print' : ''}`}>
      <div className="form-checkbox no-print" style={{ textAlign: 'center', marginBottom: '15px', padding: '10px', background: '#f1f5f9', borderRadius: '5px', border: '1px solid #cbd5e1' }}>
        <label style={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
          <input 
            type="checkbox" 
            checked={shouldPrint} 
            onChange={(e) => setShouldPrint(e.target.checked)} 
            style={{ marginRight: '8px', transform: 'scale(1.5)' }}
          />
          Print This Form
        </label>
      </div>

      <div className="header">
        <div className="sr-no-group">
          <label>Sr. No:</label>
          <input type="text" className="sr-no-input" />
        </div>
        <img 
          src={customLogo} 
          alt="Indian Railways Logo" 
          className="logo"
        />
      </div>

      <div className="title">
        Reservation against HOR Quota
      </div>

      <div className="form-group">
        <label>PNR:</label>
        <input type="text" className="form-input" onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
          if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
        }} />
      </div>

      <div className="form-group">
        <label>Train No:</label>
        <input type="text" maxLength="6" className="form-input" />
      </div>

      <div className="form-group">
        <label>Date of Journey:</label>
        <input type="date" className="form-input" />
      </div>

      <div className="form-group">
        <label>Class:</label>
        <input type="text" className="form-input" />
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

      <div className="form-group indent-group">
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label>Purpose:</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label>Reference with Mob. No:</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label>Mob. No. Of Passenger:</label>
        <input type="tel" className="form-input" onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
          if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
        }} />
      </div>

      <div className="footer">
        <div className="footer-left">
          Sr. DCM/LKO
        </div>
        <div className="footer-right">
          <div>Saurabh Tiwari</div>
          <div>Dy CSTE/Project-II/LKO</div>
          <div>Mob.9794833819</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="print-controls no-print">
        <button className="print-btn" onClick={handlePrint}>
          Print 3 Forms
        </button>
      </div>

      <div className="print-only-date">
        {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </div>

      <div className="forms-wrapper">
        <FormContent />
        <FormContent />
        <FormContent />
      </div>
    </>
  );
}

export default App;
