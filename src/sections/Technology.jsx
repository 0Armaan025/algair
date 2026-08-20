export default function Technology() {
  return (
    <div className="section">
      <h1 className="section-title">Inside ALGAIR</h1>
      <p className="section-subtitle">Explore the Components</p>
      
      <div style={{ marginBottom: '60px' }}>
        <div className="content-visual">
          <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
            {/* Main cylinder */}
            <rect x="150" y="100" width="200" height="200" fill="#6bc34a" opacity="0.3" stroke="#6bc34a" strokeWidth="2" rx="10"/>
            
            {/* Components */}
            {/* Inlet */}
            <circle cx="80" cy="150" r="20" fill="#42a5f5" stroke="#1976d2" strokeWidth="2"/>
            <text x="80" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1976d2">1</text>
            <text x="80" y="185" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Inlet</text>
            
            {/* Pre-filtration */}
            <rect x="120" y="80" width="60" height="40" fill="#ffb74d" stroke="#f57c00" strokeWidth="2" rx="5"/>
            <text x="150" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f57c00">2</text>
            <text x="150" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Filtration</text>
            
            {/* Algae chamber (center) */}
            <circle cx="250" cy="200" r="60" fill="#81c784" stroke="#388e3c" strokeWidth="3"/>
            <text x="250" y="205" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">3</text>
            <text x="250" y="280" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Algae Chamber</text>
            
            {/* Sensors */}
            <rect x="340" y="80" width="60" height="40" fill="#9575cd" stroke="#512da8" strokeWidth="2" rx="5"/>
            <text x="370" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#512da8">4</text>
            <text x="370" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Sensors</text>
            
            {/* Growth medium */}
            <rect x="120" y="320" width="60" height="40" fill="#66bb6a" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="150" y="350" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2e7d32">5</text>
            <text x="150" y="375" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Growth</text>
            <text x="150" y="390" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Medium</text>
            
            {/* Circulation */}
            <ellipse cx="250" cy="200" rx="65" ry="65" fill="none" stroke="#2196f3" strokeWidth="2" strokeDasharray="5,5"/>
            <text x="330" y="190" fontSize="13" fontWeight="bold" fill="#2196f3">Circulation</text>
            
            {/* Outlet */}
            <circle cx="420" cy="150" r="20" fill="#66bb6a" stroke="#2e7d32" strokeWidth="2"/>
            <text x="420" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2e7d32">6</text>
            <text x="420" y="185" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Outlet</text>
            
            {/* Connection lines */}
            <line x1="100" y1="150" x2="150" y2="150" stroke="#666" strokeWidth="1" strokeDasharray="2,2"/>
            <line x1="350" y1="150" x2="400" y2="150" stroke="#666" strokeWidth="1" strokeDasharray="2,2"/>
          </svg>
        </div>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '10px', marginTop: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#1a1a1a' }}>The Role of Algae 🌱</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Algae use photosynthesis to utilize carbon dioxide and release oxygen under suitable conditions. ALGAIR explores how this natural process could be incorporated into a compact vehicle-emission treatment system.
        </p>
        
        <div className="process-flow" style={{ marginTop: '30px', background: '#f8f9fa' }}>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-icon">💨</div>
              <div className="step-title">CO₂</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">🌱</div>
              <div className="step-title">Algae</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">☀️</div>
              <div className="step-title">Photosynthesis</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">💨</div>
              <div className="step-title">O₂</div>
            </div>
          </div>
        </div>
        
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px', fontStyle: 'italic' }}>
          Note: ALGAIR explores how algae can be part of the treatment process. This is a proof-of-concept that combines filtration with biological processing.
        </p>
      </div>
    </div>
  )
}
