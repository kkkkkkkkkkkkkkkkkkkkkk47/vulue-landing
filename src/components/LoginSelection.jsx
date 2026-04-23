import './LoginSelection.css';

export default function LoginSelection() {
  const handleProductClick = (productTitle) => {
    if (productTitle === 'Silia') {
      window.open('https://silia-frontend-demo.netlify.app/', '_blank');
    } else if (productTitle === 'TrailX') {
      window.open('https://trailx-frontend.netlify.app/', '_blank');
    }
  };

  const products = [
    {
      id: 1,
      image: '/images/product-1-selection.png',
      title: 'Silia',
      description: 'Silia is a collaborative finance infrastructure that enables individuals and professionals to form, manage and operate private limited partnerships, strategy groups and deal rooms. It provides the governance, coordination, communication and capital-pooling layer that underpins a private syndicate network.'
    },
    {
      id: 2,
      image: '/images/product-2-selection.png',
      title: 'TrailX',
      description: 'TrailX is a multi-asset analytics and execution terminal that gives users institution-grade research, charting, macro analysis and strategy tools across global markets. It serves as the analytical and operational engine that powers both sole-risk investing and LP-driven strategies within the Vulue ecosystem'
    },
    {
      id: 3,
      image: '/images/product-3-selection.png',
      title: 'Kaldera',
      description: 'Kaldera is a robust AI-integrated industrial intelligence platform that synchronizes real-time hardware telemetry and digital-twin diagnostics to provide end-to-end transparency for physical asset management, logistics, and engineering insurance.'
    }
  ];

  return (
    <div className="login-selection">
      {/* Header */}
      <div className="selection-header">
        <a href="/" className="back-arrow">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className="selection-logo">
          <img src="/images/vulue-logo.png" alt="Vulue Logo" />
        </div>
        <span className="selection-brand-name">VULUE</span>
      </div>

      {/* Title */}
      <p className="selection-title">Select from our flagship Software Suite.</p>

      {/* Product Cards */}
      <div className="product-cards">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductClick(product.title)}
            style={{ cursor: product.title === 'Silia' || product.title === 'TrailX' ? 'pointer' : 'default' }}
          >
            <div className="product-card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card-border" />
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
