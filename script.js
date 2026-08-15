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

    // Falling Petals Generator
    const petalsContainer = document.getElementById('petals-container');
    if (petalsContainer) {
        const petalTypes = ['rose', 'marigold'];
        
        function createPetal() {
            const petal = document.createElement('div');
            const type = petalTypes[Math.floor(Math.random() * petalTypes.length)];
            petal.classList.add('petal', type);
            
            // Random properties
            const size = Math.random() * 12 + 8; // Size between 8px and 20px
            const left = Math.random() * 100; // Starting position (%)
            const duration = Math.random() * 5 + 6; // Falling duration (6s to 11s)
            const delay = Math.random() * 8; // Delay (0s to 8s)
            
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${left}%`;
            petal.style.animationName = 'fall';
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `-${delay}s`; // Negative delay starts them mid-animation immediately
            petal.style.animationTimingFunction = 'linear';
            petal.style.animationIterationCount = 'infinite';
            
            petalsContainer.appendChild(petal);
        }
        
        // Create 45 petals for a rich but lightweight overlay
        for (let i = 0; i < 45; i++) {
            createPetal();
        }
    }

    // Letter-by-letter handwriting signature reveal
    const coupleNameEl = document.querySelector('.couple-names');
    if (coupleNameEl) {
        const text = coupleNameEl.innerText;
        coupleNameEl.innerHTML = '';
        
        const words = text.split(' ');
        let charIndex = 0;
        
        words.forEach((word, wordIdx) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.whiteSpace = 'nowrap';
            wordSpan.style.display = 'inline-block';
            
            [...word].forEach((char) => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.classList.add('reveal-letter');
                charSpan.style.animationDelay = `${charIndex * 0.04}s`; // Faster stagger delay
                wordSpan.appendChild(charSpan);
                charIndex++;
            });
            
            coupleNameEl.appendChild(wordSpan);
            
            // Add space between words
            if (wordIdx < words.length - 1) {
                const spaceSpan = document.createElement('span');
                spaceSpan.innerHTML = '&nbsp;';
                spaceSpan.style.display = 'inline-block';
                coupleNameEl.appendChild(spaceSpan);
                charIndex++;
            }
        });
    }
});
