// Snowfall effect
const snowflakes = document.createElement('div');
snowflakes.classList.add('snowflakes');
document.body.appendChild(snowflakes);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.width = `${Math.random() * 10 + 5}px`; // Random size
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = `${Math.random() * 100}%`; // Random position
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
    snowflakes.appendChild(snowflake);

    // Remove snowflake after it reaches the bottom
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Create snowflakes every 200ms
setInterval(createSnowflake, 200);

