import { useState, useEffect } from 'react';
import HeroMobile from './HeroMobile';
import AboutSection from './AboutSection';
import ProductSection from './ProductSection';
import PartnerSection from './PartnerSection';
import FooterSection from './FooterSection';
import HeroDesktop from './HeroDesktop';
import AboutSectionDesktop from './AboutSectionDesktop';
import ProductSectionDesktop from './ProductSectionDesktop';
import PartnerSectionDesktop from './PartnerSectionDesktop';
import PartnerSectionDesktop2 from './PartnerSectionDesktop2';
import FooterSectionDesktop from './FooterSectionDesktop';
import './LandingPageResponsive.css';
import './ResponsiveWrapper.css';

export default function LandingPageResponsive() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentPartnerSlide((prev) => (prev === 0 ? 1 : 0));
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isMobile, currentPartnerSlide]);

  useEffect(() => {
    if (!isMobile) {
      const container = document.querySelector('.partner-container-desktop');
      if (container) {
        container.scrollTo({
          left: currentPartnerSlide * window.innerWidth,
          behavior: 'smooth'
        });
      }
    }
  }, [currentPartnerSlide, isMobile]);

  const scrollToPartner = (index) => {
    setCurrentPartnerSlide(index);
  };

  if (isMobile) {
    return (
      <>
        <HeroMobile />
        <AboutSection />
        <ProductSection />
        <PartnerSection />
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <div style={{ width: '100%', backgroundColor: '#000' }}>
        <HeroDesktop />
      </div>
      <div style={{ width: '100%', backgroundColor: '#091a96' }}>
        <AboutSectionDesktop />
      </div>
      <div style={{ width: '100%', backgroundColor: '#eef0f1' }}>
        <ProductSectionDesktop />
      </div>
      <div className="partner-container-desktop">
        <PartnerSectionDesktop onNavigate={scrollToPartner} />
        <PartnerSectionDesktop2 onNavigate={scrollToPartner} />
      </div>
      <div style={{ width: '100%', backgroundColor: '#000' }}>
        <FooterSectionDesktop />
      </div>
    </>
  );
}
