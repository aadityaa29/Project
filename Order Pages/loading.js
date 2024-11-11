
// Wait for the window to load completely or use a timeout to mimic loading
window.addEventListener('load', function() {
// Simulate loading time with a delay (adjust the delay time as needed)
setTimeout(() => {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    // Show the main content
    const mainContent = document.getElementById('');
    mainContent.style.display = 'block';
}, 1000); // 2000 ms = 2 seconds delay, adjust as per your need
});
