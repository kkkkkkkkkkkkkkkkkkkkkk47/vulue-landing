import './AboutSection.css';

export default function AboutSection() {
  return (
    <div className="about-section">
      <h2 className="about-heading">From insights to impact!</h2>
      <div className="about-text">
        <span className="about-text-light">We are a </span>
        <span className="about-text-bold">software and intelligence technology company</span>
        <span className="about-text-light">
          {' '}focused on building the systems for tomorrow, today! We design and maintain digital tools that solve and optimize for complex realities across emerging markets. From Finance to Governance to Energy, get the best value with Vulue!
        </span>
      </div>
    </div>
  );
}
