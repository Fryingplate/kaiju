// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check local storage for dark mode preference
const darkModePreference = localStorage.getItem('dark-mode');
if (darkModePreference === 'enabled') {
    document.body.classList.add('dark');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Update dark mode preference in localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

