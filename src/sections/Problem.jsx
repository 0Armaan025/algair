export default function Problem() {
  return (
    <div className="section">
      <h1 className="section-title">The Problem We're Solving</h1>
      
      <div className="content-grid">
        <div className="content-text">
          <ul>
            <li>Vehicles release harmful gases and particulate pollutants into the atmosphere.</li>
            <li>Increasing vehicle usage contributes significantly to urban air pollution.</li>
            <li>Conventional exhaust systems mainly focus on controlling emissions rather than using biological processes.</li>
            <li>There is a critical need for innovative, compact and sustainable approaches to emission treatment.</li>
          </ul>
        </div>
        <div className="content-visual">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
            {/* Car */}
            <rect x="120" y="180" width="160" height="60" fill="#333" rx="5"/>
            <circle cx="150" cy="240" r="15" fill="#666"/>
            <circle cx="250" cy="240" r="15" fill="#666"/>
            
            {/* Exhaust pipe */}
            <rect x="280" y="200" width="30" height="30" fill="#555"/>
            
            {/* Pollution clouds */}
            <circle cx="330" cy="140" r="20" fill="#999" opacity="0.8"/>
            <circle cx="350" cy="150" r="18" fill="#999" opacity="0.8"/>
            <circle cx="370" cy="140" r="16" fill="#999" opacity="0.8"/>
            <circle cx="355" cy="120" r="19" fill="#999" opacity="0.8"/>
            
            {/* Arrows from exhaust */}
            <path d="M 315 210 Q 330 180 340 140" stroke="#d32f2f" strokeWidth="2" fill="none" markerEnd="url(#arrowred)"/>
            
            {/* Arrow marker */}
            <defs>
              <marker id="arrowred" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#d32f2f" />
              </marker>
            </defs>
            
            {/* Text */}
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="#333" fontWeight="bold">
              Harmful Emissions & Pollution
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
