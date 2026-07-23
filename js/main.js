// Start Loading Screen
let loadingScreen = document.getElementById('loading-screen');
let loadingIcon = document.getElementById('loading-icon');
window.addEventListener('load', async () => {
    await setTimeout(() => {
        loadingIcon.style.opacity = 0;
    }, 1000);
    await setTimeout(() => {
        loadingScreen.style.opacity = 0;
    }, 2000);
    
    
    setTimeout(() => {
        loadingScreen.remove();
    }, 5000);
});
// End Loading Screen