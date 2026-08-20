export default function Future() {
  const roadmap = [
    { stage: 'Prototype', desc: 'Proof of concept demonstration' },
    { stage: 'Testing', desc: 'Laboratory and bench testing' },
    { stage: 'Vehicle Pilot', desc: 'Integration with test vehicles' },
    { stage: 'Fleet Applications', desc: 'Deployment in multiple vehicles' },
    { stage: 'Automotive Integration', desc: 'Potential OEM partnerships' }
  ]

  const applications = [
    { icon: '🚗', title: 'Passenger Cars', desc: 'Personal vehicles for urban mobility' },
    { icon: '🚌', title: 'Buses', desc: 'Public transportation fleets' },
    { icon: '🚚', title: 'Commercial Fleets', desc: 'Delivery and logistics vehicles' },
    { icon: '📦', title: 'Delivery Vehicles', desc: 'Last-mile delivery optimization' }
  ]

  return (
    <div className="section">
      <h1 className="section-title">Future Potential</h1>
      <p className="section-subtitle">From Prototype to Cleaner Mobility</p>
      
      <div style={{ marginBottom: '80px' }}>
        <div className="process-flow">
          <div className="flow-steps">
            {roadmap.map((item, idx) => (
              <div key={idx} style={{ flex: 1 }}>
                <div className="flow-step">
                  <div className="step-icon" style={{ fontSize: '32px' }}>
                    {idx === 0 ? '🔬' : idx === 1 ? '⚗️' : idx === 2 ? '🚗' : idx === 3 ? '🚌' : '🌍'}
                  </div>
                  <div className="step-title">{item.stage}</div>
                  <div className="step-desc">{item.desc}</div>
                </div>
                {idx < roadmap.length - 1 && <div className="flow-arrow" style={{ fontSize: '20px' }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'white', padding: '50px', borderRadius: '10px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', color: '#1a1a1a', textAlign: 'center' }}>Potential Applications</h2>
        
        <div className="cards-grid">
          {applications.map((app, idx) => (
            <div key={idx} className="card">
              <div className="card-icon">{app.icon}</div>
              <h3>{app.title}</h3>
              <p>{app.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #6bc34a 0%, #558b2f 100%)', 
        color: 'white', 
        padding: '60px', 
        borderRadius: '10px', 
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>ALGAIR</h1>
        <p style={{ fontSize: '24px', fontWeight: 'normal', letterSpacing: '1px' }}>
          Engineering nature into cleaner mobility.
        </p>
        <p style={{ fontSize: '16px', marginTop: '30px', opacity: 0.9 }}>
          The future of sustainable vehicle emission treatment starts now.
        </p>
      </div>
    </div>
  )
}
