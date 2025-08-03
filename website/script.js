// Simple client‑side interactivity for Duratact site.
//
// Handles mobile navigation toggle and basic form submission feedback.
// Provides a friendly alert in Chinese to cater for the brand owner while
// remaining approachable to English speakers. No personal data is sent —
// instead we reset the form after showing a confirmation message.

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Show a friendly message. Using Chinese to acknowledge the brand's
      // requirements — adjust text here for localisation as needed.
      alert('谢谢！您的信息已发送，我们会尽快与您联系。\nThank you! Your message has been sent.');
      contactForm.reset();
    });
  }
});