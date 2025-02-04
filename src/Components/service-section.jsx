import '../styles/service-section.css';
export default function Services() {

  return (
<section class="services-section-container">
  <h2 class="services-section-title">Our Services</h2>
  <p class="services-section-subtitle">Cutting-edge solutions tailored for your business success.</p>
  
  <div class="services-section-cards">
    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-icon fas fa-chart-line"></i>
      </div>
      <h3 class="service-section-title">Digital Marketing</h3>
      <p class="service-section-description">Boost your brand’s visibility with expert strategies.</p>
    </div>

    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-icon fas fa-laptop-code"></i>
      </div>
      <h3 class="service-section-title">Web Development</h3>
      <p class="service-section-description">Stunning, fast, and secure websites tailored to you.</p>
    </div>

    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-section-icon fas fa-mobile-alt"></i>
      </div>
      <h3 class="service-section-title">App Development</h3>
      <p class="service-section-description">Building seamless and engaging mobile experiences.</p>
    </div>

    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-icon fas fa-palette"></i>
      </div>
      <h3 class="service-section-title">UI/UX Design</h3>
      <p class="service-section-description">Crafting intuitive and aesthetic user experiences.</p>
    </div>

    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-icon fas fa-headset"></i>
      </div>
      <h3 class="service-section-title">Virtual Assistance</h3>
      <p class="service-section-description">Professional support to streamline your workflow.</p>
    </div>

    <div class="service-section-card">
      <div class="icon-container">
        <i class="service-icon fas fa-shopping-cart"></i>
      </div>
      <h3 class="service-section-title">E-commerce Design</h3>
      <p class="service-section-description">Creating high-converting online stores for your business.</p>
    </div>
  </div>
</section>

  );
}
