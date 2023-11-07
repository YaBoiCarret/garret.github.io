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

       
        let newFontSize = containerHeight / 11;

        // Set the new font size
        text.style.fontSize = newFontSize + 'px';
    });
}

// Initialize the resizeText function after window load
window.addEventListener('load', resizeText);

// Attach the debounced resize event listener
window.addEventListener('resize', debounce(resizeText, 250));