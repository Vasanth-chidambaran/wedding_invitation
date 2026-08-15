// Initialize Animate On Scroll (AOS)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: true, // whether animation should happen only once - while scrolling down
        offset: 100, // offset (in px) from the original trigger point
    });

    // Main Hero Countdown
    const mainCountDownDate = new Date("Sep 5, 2026 21:43:00").getTime();
    
    // Mini Countdowns
    const miniCountdowns = document.querySelectorAll('.mini-countdown');
    
    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Update Main Hero Countdown
        const mainDistance = mainCountDownDate - now;
        const mainElement = document.getElementById("countdown");
        if (mainElement) {
            if (mainDistance < 0) {
                mainElement.innerHTML = "<div class='text-white fs-3 font-weight-bold'>The big day is here!</div>";
            } else {
                const days = Math.floor(mainDistance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((mainDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((mainDistance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((mainDistance % (1000 * 60)) / 1000);
                mainElement.innerHTML = `
                    <div class="countdown-item"><span>${days}</span><small>Days</small></div>
                    <div class="countdown-item"><span>${hours}</span><small>Hours</small></div>
                    <div class="countdown-item"><span>${minutes}</span><small>Minutes</small></div>
                    <div class="countdown-item"><span>${seconds}</span><small>Seconds</small></div>
                `;
            }
        }
        
        // Update Mini Countdowns
        miniCountdowns.forEach(el => {
            const dateStr = el.getAttribute('data-date');
            const targetDate = new Date(dateStr).getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                el.innerHTML = "<div class='text-success font-weight-bold fs-5 my-2' style='color: var(--secondary-color) !important;'>Event Started!</div>";
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                el.innerHTML = `
                    <div class="mini-cd-item"><span>${days}</span><small>d</small></div>
                    <div class="mini-cd-item"><span>${hours}</span><small>h</small></div>
                    <div class="mini-cd-item"><span>${minutes}</span><small>m</small></div>
                    <div class="mini-cd-item"><span>${seconds}</span><small>s</small></div>
                `;
            }
        });
        
    }, 1000);
});
