export default function Features() {
  const features = [
    {
      icon: '🌱',
      title: 'Algae-Based',
      desc: 'Uses a biological component inspired by natural photosynthesis.'
    },
    {
      icon: '🚗',
      title: 'Vehicle-Compatible',
      desc: 'Designed around integration with vehicle exhaust systems.'
    },
    {
      icon: '♻️',
      title: 'Sustainable Approach',
      desc: 'Combines biological processing with advanced filtration.'
    },
    {
      icon: '📦',
      title: 'Compact Design',
      desc: 'Concept focuses on a compact form factor for integration.'
    },
    {
      icon: '📊',
      title: 'Monitoring',
      desc: 'Can incorporate sensors to monitor operating conditions.'
    },
    {
      icon: '🔧',
      title: 'Modular Concept',
      desc: 'Individual components can potentially be improved or replaced.'
    }
  ]

  return (
    <div className="section">
      <h1 className="section-title">Key Features</h1>
      <p className="section-subtitle">What Makes ALGAIR Unique</p>
      
      <div className="cards-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="card">
            <div className="card-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', background: 'white', padding: '50px', borderRadius: '10px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#1a1a1a' }}>Why ALGAIR?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '30px' }}>
          <div>
            <h3 style={{ color: '#6bc34a', marginBottom: '10px' }}>Biological Innovation</h3>
            <p style={{ color: '#666' }}>Unique approach to emission treatment</p>
          </div>
          <div>
            <h3 style={{ color: '#6bc34a', marginBottom: '10px' }}>CO₂ Utilization</h3>
            <p style={{ color: '#666' }}>Potential for carbon utilization</p>
          </div>
          <div>
            <h3 style={{ color: '#6bc34a', marginBottom: '10px' }}>Compact & Integrated</h3>
            <p style={{ color: '#666' }}>Vehicle-oriented design philosophy</p>
          </div>
          <div>
            <h3 style={{ color: '#6bc34a', marginBottom: '10px' }}>Nature + Engineering</h3>
            <p style={{ color: '#666' }}>Combines natural processes with technology</p>
          </div>
          <div>
            <h3 style={{ color: '#6bc34a', marginBottom: '10px' }}>Scalable Concept</h3>
            <p style={{ color: '#666' }}>Foundation for future development</p>
          </div>
        </div>
      </div>
    </div>
  )
}
