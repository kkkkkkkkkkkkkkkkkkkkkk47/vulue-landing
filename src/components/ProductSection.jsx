import { useState } from 'react';
import './ProductSection.css';

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: '/images/product-1.svg',
      title: 'Silia',
      description: 'Silia is a collaborative finance infrastructure that enables individuals and professionals to form, manage and operate private limited partnerships, strategy groups and deal rooms. It provides the governance, coordination, communication and capital-pooling layer that underpins a private syndicate network.',
      borderTop: 35,
      titleTop: 379.5,
      descTop: 465.5,
      titleLeft: 66,
      descLeft: 66
    },
    {
      id: 2,
      image: '/images/product-2.png',
      title: 'TrailX',
      description: 'TrailX is a multi-asset analytics and access terminal that gives users institution-grade research, charting, macro analysis and strategy tools across global markets.',
      borderTop: 355,
      titleTop: 700,
      descTop: 760,
      titleLeft: 61,
      descLeft: 61
    },
    {
      id: 3,
      image: '/images/product-3.png',
      title: 'Kaldera',
      description: 'Kaldera is a robust AI-integrated industrial\nintelligence platform that synchronizes real-time hardware telemetry and digital-twin diagnostics to provide end-to-end transparency for physical asset management, logistics, and engineering insurance.',
      borderTop: 675,
      titleTop: 1022,
      descTop: 1092,
      titleLeft: 61,
      descLeft: 61
    }
  ];

  const handleImageClick = (product) => {
    if (selectedProduct?.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <div className="product-section">
      {/* Image 1 */}
      <div 
        className={`product-image-container product-image-1 ${selectedProduct?.id === 1 ? 'expanded' : ''}`}
        onClick={() => handleImageClick(products[0])}
      >
        <img src={products[0].image} alt="Product 1" className="product-image" />
      </div>
      
      {/* Image 2 - moves below image 1 textbox when image 1 is clicked */}
      <div 
        className={`product-image-container product-image-2 ${selectedProduct?.id === 1 ? 'pushed-down' : ''}`}
        onClick={() => handleImageClick(products[1])}
      >
        <img src={products[1].image} alt="Product 2" className="product-image" />
      </div>
      
      {/* Image 3 - moves down when image 1 or 2 is clicked */}
      <div 
        className={`product-image-container product-image-3 ${selectedProduct?.id === 1 ? 'pushed-down' : ''} ${selectedProduct?.id === 2 ? 'pushed-down-img2' : ''}`}
        onClick={() => handleImageClick(products[2])}
      >
        <img src={products[2].image} alt="Product 3" className="product-image" />
      </div>
      
      {/* Show expanded details if a product is selected */}
      {selectedProduct && (
        <>
          <div 
            className={`product-expanded-border ${selectedProduct.id === 1 ? 'border-radius' : ''}`}
            style={{ top: `${selectedProduct.borderTop}px` }}
          />
          <h3 
            className="product-expanded-title" 
            style={{ 
              top: `${selectedProduct.titleTop}px`,
              left: `${selectedProduct.titleLeft}px`
            }}
          >
            {selectedProduct.title}
          </h3>
          <p 
            className="product-expanded-description" 
            style={{ 
              top: `${selectedProduct.descTop}px`,
              left: `${selectedProduct.descLeft}px`
            }}
          >
            {selectedProduct.description}
          </p>
        </>
      )}
      
      <div className={`product-text ${selectedProduct ? 'pushed-down' : ''}`}>
        <p>Our flagship Software Suite.</p>
      </div>
    </div>
  );
}
