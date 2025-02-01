import '../styles/service-section.css';
export default function Services() {

  return (
<section class="services-container">
  <h2 class="services-title">Our Services</h2>
  <p class="services-subtitle">Cutting-edge solutions tailored for your business success.</p>
  
  <div class="services-cards">
    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-chart-line"></i>
      </div>
      <h3 class="service-title">Digital Marketing</h3>
      <p class="service-description">Boost your brand’s visibility with expert strategies.</p>
    </div>

    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-laptop-code"></i>
      </div>
      <h3 class="service-title">Web Development</h3>
      <p class="service-description">Stunning, fast, and secure websites tailored to you.</p>
    </div>

    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-mobile-alt"></i>
      </div>
      <h3 class="service-title">App Development</h3>
      <p class="service-description">Building seamless and engaging mobile experiences.</p>
    </div>

    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-palette"></i>
      </div>
      <h3 class="service-title">UI/UX Design</h3>
      <p class="service-description">Crafting intuitive and aesthetic user experiences.</p>
    </div>

    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-headset"></i>
      </div>
      <h3 class="service-title">Virtual Assistance</h3>
      <p class="service-description">Professional support to streamline your workflow.</p>
    </div>

    <div class="service-card">
      <div class="icon-container">
        <i class="service-icon fas fa-shopping-cart"></i>
      </div>
      <h3 class="service-title">E-commerce Design</h3>
      <p class="service-description">Creating high-converting online stores for your business.</p>
    </div>
  </div>
</section>

  );
}
