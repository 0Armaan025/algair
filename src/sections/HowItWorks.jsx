export default function HowItWorks() {
  return (
    <div className="section">
      <h1 className="section-title">How It Works</h1>
      <p className="section-subtitle">The ALGAIR Treatment Process</p>
      
      <div className="process-flow">
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-icon">🚗</div>
            <div className="step-title">Vehicle Exhaust</div>
            <div className="step-desc">Exhaust gases exit the vehicle engine</div>
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="step-icon">📥</div>
            <div className="step-title">Inlet</div>
            <div className="step-desc">Gases enter the ALGAIR system</div>
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="step-icon">🔽</div>
            <div className="step-title">Pre-Filtration</div>
            <div className="step-desc">Particulate matter is filtered out</div>
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="step-icon">🌱</div>
            <div className="step-title">Algae Chamber</div>
            <div className="step-desc">Gases interact with algae culture</div>
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="step-icon">⚗️</div>
            <div className="step-title">Biological Processing</div>
            <div className="step-desc">Algae utilizes CO₂ through photosynthesis</div>
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-step">
            <div className="step-icon">📤</div>
            <div className="step-title">Clean Outlet</div>
            <div className="step-desc">Treated gases exit the system</div>
          </div>
        </div>
      </div>
    </div>
  )
}
