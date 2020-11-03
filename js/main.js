const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('Nov 6, 2020 17:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get todays date
    const now = new Date().getTime();
    // Distance from now to launch
    const distance = launchDate - now;
    // Time calc
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div> 
    `;

    if(distance < 0) {
        clearInterval(intvl);
        countdown.getElementsByClassName.color = '#17a2b8';
        countdown.innerHTML = 'Ready'
    }
}, 1000);