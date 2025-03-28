// Main JavaScript for Temple Website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
          mainNav.classList.toggle('active');
      });
  }

  // Implement Parallax Effect
  window.addEventListener('scroll', function() {
      handleParallax();
      handleBackToTop();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          if (this.getAttribute('href') !== '#') {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  window.scrollTo({
                      top: target.offsetTop - 80,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });

  // Testimonials Slider
  initTestimonialsSlider();

  // Back to Top button functionality
  initBackToTop();
});

// Parallax Effect Function
function handleParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  const scrollPosition = window.pageYOffset;

  parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.5;
      const yPos = -(scrollPosition * speed);
      element.style.transform = `translateY(${yPos}px)`;
  });
}

// Back to Top Button Function
function handleBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
      if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('active');
      } else {
          backToTopBtn.classList.remove('active');
      }

      backToTopBtn.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
}

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
}

// Simple Testimonials Slider Function
function initTestimonialsSlider() {
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length <= 1) return;

  let currentIndex = 0;
  const totalTestimonials = testimonials.length;
  
  // Hide all testimonials except the first one
  testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
          testimonial.style.display = 'none';
      }
  });

  // Auto slide function
  function autoSlide() {
      testimonials[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % totalTestimonials;
      testimonials[currentIndex].style.display = 'block';
  }

  // Set auto slide interval
  setInterval(autoSlide, 5000);
}

// Add Animation to Elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
      }
  });
}

// Call animate on scroll function on scroll
window.addEventListener('scroll', animateOnScroll);

// Preload important images for smoother experience
function preloadImages() {
  const imageSources = [
      'images/temple-bg.jpg',
      'images/festival-bg.jpg',
      'images/temple-deity.jpg'
  ];
  
  imageSources.forEach(src => {
      const img = new Image();
      img.src = src;
  });
}

// Call preload images function
preloadImages();