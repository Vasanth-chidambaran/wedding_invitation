// Initialize Animate On Scroll (AOS)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: true, // whether animation should happen only once - while scrolling down
        offset: 100, // offset (in px) from the original trigger point
    });

    // Countdown Timer logic
    // Set the date we're counting down to
    // Change this to the actual wedding date
    const countDownDate = new Date("Oct 25, 2026 09:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "<div class='text-white fs-3 font-weight-bold'>The big day is here!</div>";
            } else {
                countdownElement.innerHTML = `
                    <div class="countdown-item"><span>${days}</span><small>Days</small></div>
                    <div class="countdown-item"><span>${hours}</span><small>Hours</small></div>
                    <div class="countdown-item"><span>${minutes}</span><small>Minutes</small></div>
                    <div class="countdown-item"><span>${seconds}</span><small>Seconds</small></div>
                `;
            }
        }
    }, 1000);
});
