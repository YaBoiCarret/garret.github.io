// Wait for the page to fully load before running the JavaScript
        document.addEventListener('DOMContentLoaded', function (event) {
            // Get the HTML element with the class "welcome-text"
            var welcomeTextElement = document.querySelector(".welcome-text");

            // Get the text content from that element
            var textToType = welcomeTextElement.textContent;

            // Function to create the typewriter effect
            function typeWriter(text, index, callback) {
                if (index < text.length) {
                    // Display the text up to the current index
                    welcomeTextElement.innerHTML = text.substring(0, index + 1);
                    setTimeout(function () {
                        // Continue typing the next character
                        typeWriter(text, index + 1, callback);
                    }, 100);
                } else if (typeof callback == 'function') {
                    // Call the callback function when typing is complete
                    setTimeout(callback, 700);
                }
            }

            // Start the typewriter effect
            typeWriter(textToType, 0, function () {
                // Typing animation is complete
            });
        });