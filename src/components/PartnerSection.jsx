import { useState, useEffect } from 'react';
import './PartnerSection.css';

export default function PartnerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      type: 'flower-pattern',
      image: '/images/flower-pattern.png',
      text: (
        <>
          <span className="partner-text-light">We are a Technology Provider & Partner to </span>
          <span className="partner-text-bold">Proprietary Partners LLP</span>
        </>
      )
    },
    {
      type: 'full-image',
      image: '/images/partner-slide-2.png',
      text: (
        <>
          <div className="partner-text-line1">We are a</div>
          <div className="partner-text-line2">Technology</div>
          <div className="partner-text-line3">Provider & Partner</div>
          <div className="partner-text-line4">to <span className="partner-text-equirra">EQUIRRA</span></div>
        </>
      ),
      link: 'Visit Equirra.com'
    }
  ];

  // Auto-scroll between slides every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const handleSwipe = (e) => {
    const startX = e.touches?.[0]?.clientX || e.clientX;
    
    const handleMove = (moveEvent) => {
      const currentX = moveEvent.touches?.[0]?.clientX || moveEvent.clientX;
      const diff = startX - currentX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left - go to next slide or wrap to first
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else if (diff < 0) {
          // Swipe right - go to previous slide or wrap to last
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('mousemove', handleMove);
      }
    };
    
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mousemove', handleMove);
    
    const handleEnd = () => {
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      document.removeEventListener('mouseup', handleEnd);
    };
    
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('mouseup', handleEnd);
  };

  return (
    <div 
      className="partner-section" 
      onTouchStart={handleSwipe}
      onMouseDown={handleSwipe}
    >
      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.type === 'full-image' ? (
              <>
                <div className="full-background-image">
                  <img src={slide.image} alt="" />
                </div>
                {slide.text && (
                  <p className="partner-text">
                    {slide.text}
                  </p>
                )}
                {slide.link && (
                  <div className="partner-link">
                    {slide.link}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flower-pattern">
                  <img src={slide.image} alt="" />
                </div>
                {slide.text && (
                  <p className="partner-text">
                    {slide.text}
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="progress-indicators">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`progress-bar ${index === currentSlide ? 'progress-bar-active' : 'progress-bar-inactive'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
