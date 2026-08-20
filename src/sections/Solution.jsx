import logo from '../assets/logo.png'

export default function Solution() {
  return (
    <div className="section">
      <h1 className="section-title">Our Solution: ALGAIR</h1>
      
      <div className="content-grid">
        <div className="content-text">
          <h2>Introducing ALGAIR</h2>
          <p>
            ALGAIR integrates an algae-based biological chamber with an exhaust treatment system. The concept directs treated exhaust gases through the system, where filtration and algae-based processes work together to help reduce the environmental impact of emissions.
          </p>
          <p style={{ marginTop: '20px' }}>
            Our approach combines proven filtration technology with the natural capabilities of algae to create a compact, vehicle-integrated solution for emission treatment.
          </p>
        </div>
        <div className="content-visual">
          <img src={logo} alt="ALGAIR Concept" style={{ maxWidth: '350px' }} />
        </div>
      </div>
    </div>
  )
}
