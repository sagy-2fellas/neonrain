// Global JavaScript for Neon Rain theme
document.addEventListener('DOMContentLoaded', function() {
  // Initialize rain effect
  initRainEffect();
  
  // Initialize neon glow effects
  initNeonEffects();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
});

function initRainEffect() {
  const rainContainer = document.querySelector('.rain-overlay');
  if (!rainContainer) return;
  
  function createRainDrop() {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    rainContainer.appendChild(drop);
    
    // Remove drop after animation
    setTimeout(() => {
      if (drop.parentNode) {
        drop.parentNode.removeChild(drop);
      }
    }, 5000);
  }
  
  // Create rain drops periodically
  setInterval(createRainDrop, 100);
}

function initNeonEffects() {
  const neonElements = document.querySelectorAll('.neon-glow');
  neonElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  });
}

function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Utility functions
window.NeonRain = {
  initRainEffect,
  initNeonEffects,
  initSmoothScrolling
};
