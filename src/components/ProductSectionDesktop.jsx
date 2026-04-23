import { useState } from 'react';
import './ProductSectionDesktop.css';

export default function ProductSectionDesktop() {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleId) => {
    setSelectedCircle(selectedCircle === circleId ? null : circleId);
  };

  return (
    <div className="product-section-desktop">
      {/* Decorative circles */}
      <div 
        className={`decorative-circle-1 ${selectedCircle === 1 ? 'selected' : ''} ${selectedCircle === 2 ? 'moved-bottom-left' : ''} ${selectedCircle === 3 ? 'moved-top-left-alt' : ''}`}
        onClick={() => handleCircleClick(1)}
      >
        <img src="/images/desktop-circle-1.png" alt="" />
      </div>
      
      <div 
        className={`decorative-circle-2 ${selectedCircle === 1 ? 'moved-down' : ''} ${selectedCircle === 2 ? 'selected-top-right' : ''} ${selectedCircle === 3 ? 'moved-top-right-alt' : ''}`}
        onClick={() => handleCircleClick(2)}
      >
        <img src="/images/desktop-circle-2.png" alt="" />
      </div>
      
      <div 
        className={`decorative-circle-3 ${selectedCircle === 1 ? 'moved-left' : ''} ${selectedCircle === 2 ? 'moved-bottom-right' : ''} ${selectedCircle === 3 ? 'selected-bottom-left' : ''}`}
        onClick={() => handleCircleClick(3)}
      >
        <img src="/images/desktop-circle-3.png" alt="" />
      </div>
      
      {/* Expanded content for circle 1 (Silia) */}
      {selectedCircle === 1 && (
        <>
          <div className="expanded-border-1" />
          <h3 className="expanded-title-1">Silia</h3>
          <p className="expanded-description-1">
            Silia is a collaborative finance infrastructure that enables individuals and professionals to form, manage and operate private limited partnerships, strategy groups and deal rooms. It provides the governance, coordination, communication and capital-pooling layer that underpins a private syndicate network.
          </p>
        </>
      )}
      
      {/* Expanded content for circle 2 (TrailX) */}
      {selectedCircle === 2 && (
        <>
          <div className="expanded-border-2" />
          <h3 className="expanded-title-2">trailX</h3>
          <p className="expanded-description-2">
            TrailX is a multi-asset analytics and access terminal that gives users institution-grade research, charting, macro analysis and strategy tools across global markets.
          </p>
        </>
      )}
      
      {/* Expanded content for circle 3 (Kaldera) */}
      {selectedCircle === 3 && (
        <>
          <div className="expanded-border-3" />
          <h3 className="expanded-title-3">Kaldera</h3>
          <p className="expanded-description-3">
            Kaldera is a robust AI-integrated industrial intelligence platform that synchronizes real-time hardware telemetry and digital-twin diagnostics to provide end-to-end transparency for physical asset management, logistics, and engineering insurance.
          </p>
        </>
      )}
      
      {/* Text */}
      <div className={`product-suite-text ${selectedCircle === 1 ? 'moved-right' : ''} ${selectedCircle === 2 ? 'moved-right' : ''} ${selectedCircle === 3 ? 'moved-right-alt' : ''}`}>
        <p>Our flagship Software Suite.</p>
      </div>
    </div>
  );
}
