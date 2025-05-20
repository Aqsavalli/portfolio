document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch');
  const moonIcon = document.getElementById('moon');
  const sunIcon = document.getElementById('sun');
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme);
      updateIcons(savedTheme);
  } else {
      // Default to light theme, show moon icon
      updateIcons('light-theme');
  }

  // Toggle theme on click
  toggleSwitch.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      
      // Update localStorage and icons
      const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', currentTheme);
      updateIcons(currentTheme);
  });

  // Function to update icon visibility
  function updateIcons(theme) {
      if (theme === 'dark-theme') {
          moonIcon.classList.remove('visible');
          moonIcon.classList.add('hidden');
          sunIcon.classList.remove('hidden');
          sunIcon.classList.add('visible');
          console.log('Dark theme applied: Sun icon should be visible, moon icon hidden');
      } else {
          moonIcon.classList.remove('hidden');
          moonIcon.classList.add('visible');
          sunIcon.classList.remove('visible');
          sunIcon.classList.add('hidden');
          console.log('Light theme applied: Moon icon should be visible, sun icon hidden');
      }
  }
});

// Initialize Typed.js for the featured-name section
const typed = new Typed('.typedText', {
  strings: ['Web Developer', 'Full Stack developer', 'Frontend Enthusiast'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}
