function adjustTextSize() {
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
        const text = description.querySelector('.text-container'); // ensure there's a text container
        if (!text) return; // If there is no text container, do nothing
        
        const containerHeight = description.offsetHeight;
        let newFontSize;


        if (window.innerWidth <= 768) {   
            newFontSize = Math.min(containerHeight / 20, 18); 
        } else {
             newFontSize = Math.min(containerHeight / 10, 22); 
        }

        text.style.fontSize = Math.max(newFontSize, 12) + 'px';
    });
}

// Initialize the resizeText function after window load
window.addEventListener('load', resizeText);

// Attach the debounced resize event listener
window.addEventListener('resize', debounce(resizeText, 250));

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
