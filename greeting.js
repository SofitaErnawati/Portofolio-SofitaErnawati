// greeting.js
document.addEventListener('DOMContentLoaded', () => {
    const preTitle = document.querySelector('.pre-title');
    
    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour >= 3 && hour < 11) {
            greeting = "Selamat Pagi";
        } else if (hour >= 11 && hour < 15) {
            greeting = "Selamat Siang";
        } else if (hour >= 15 && hour < 18) {
            greeting = "Selamat Sore";
        } else {
            greeting = "Selamat Malam";
        }
        
        if (preTitle) {
            preTitle.textContent = `${greeting}, Selamat Datang Di Website Portofolio`;
        }
    }
    
    updateGreeting();
    setInterval(updateGreeting, 60000);
});