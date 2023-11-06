function resizeText() {
    // Wait for all images to load before calculating sizes
    const images = Array.from(document.images);
    let loadedImages = 0;

    images.forEach((img) => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', imageLoaded);
        }
    });

    // Function to call when an image is loaded
    function imageLoaded() {
        this.removeEventListener('load', imageLoaded);
        loadedImages++;
        if (loadedImages === images.length) {
            adjustTextSize();
        }
    }

    // Call immediately if all images are already loaded
    if (loadedImages === images.length) {
        adjustTextSize();
    }
}

function adjustTextSize() {
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
        const text = description.querySelector('.text-container'); // ensure there's a text container
        const containerHeight = description.offsetHeight;

        // Calculate a new font size based on some ratio or specific logic
        // Example: simple ratio (you will need to adjust this logic to suit your needs)
        let newFontSize = containerHeight / 10; // This is arbitrary. You need to decide how to calculate this.

        // Set the new font size
        text.style.fontSize = newFontSize + 'px';
    });
}

// Initialize the resizeText function after window load
window.addEventListener('load', resizeText);

// Attach the debounced resize event listener
window.addEventListener('resize', debounce(resizeText, 250));