document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the saved dark mode setting, if it exists.
  let currentMode = localStorage.getItem('darkMode');
  
  // If no preference is set, default to dark mode.
  if (!currentMode) {
    currentMode = 'enabled';
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Apply dark mode if the current mode is enabled.
  if (currentMode === 'enabled') {
    document.documentElement.classList.add('dark-mode'); // <html>
    document.body.classList.add('dark-mode');
  }

  // If a dark mode toggle exists on the page, set its state and listen for changes.
  const toggleSwitch = document.getElementById('darkModeToggle');
  if (toggleSwitch) {
    toggleSwitch.checked = currentMode === 'enabled';
    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }
});