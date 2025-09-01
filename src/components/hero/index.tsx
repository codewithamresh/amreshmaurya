import "./style.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-glass">
         <div className="hero-image">
          <img src="/hero.avif" alt="Amresh profile" />
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Amresh</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer | Backend Developer | Spring Boot Dev | Java | Javascript |
        </p>
        <a href="#contact" className="hero-btn">
          Get in Touch
        </a>
       
      </div>
    </section>
  );
}
