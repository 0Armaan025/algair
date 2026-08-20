import logo from '../assets/logo.png'

export default function Home() {
  return (
    <div className="section">
      <div className="content-grid" style={{ minHeight: '80vh', alignItems: 'center' }}>
        <div className="content-text">
          <h1 style={{ fontSize: '56px', marginBottom: '30px', color: '#1a1a1a' }}>
            <span style={{ color: '#6bc34a' }}>ALGAIR</span>
          </h1>
          <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#555', fontWeight: 'normal' }}>
            Algae-Powered Exhaust Filtration System
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
            ALGAIR is a compact algae-based exhaust filtration concept designed to reduce the environmental impact of vehicle emissions by combining filtration technology with the natural capabilities of algae.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
            Engineering nature into cleaner mobility.
          </p>
        </div>
        <div className="content-visual">
          <img src={logo} alt="ALGAIR System" style={{ maxWidth: '400px' }} />
        </div>
      </div>
    </div>
  )
}
