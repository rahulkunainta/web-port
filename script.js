// /==================Home-contents: Simple Typing Animation (No External Library) ========================== /

// The text element to target
const textElement = document.querySelector(".text");
// The array of words to cycle through
const words = ["Android App Developer", "Web Developer", "Full-Stack Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Typing speed configuration
const typeSpeed = 50; // Speed of typing a character
const deleteSpeed = 30; // Speed of deleting a character
const delay = 1000; // Delay before starting next word

function typeWriter() {
    const currentWord = words[wordIndex];
    let displayText = currentWord;

    if (isDeleting) {
        // Deleting effect
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing effect
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    textElement.textContent = displayText;

    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        // Finished typing the word, now wait before deleting
        currentSpeed = delay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to the next word
        isDeleting = false;
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0; // Loop back to the first word
        }
    }

    setTimeout(typeWriter, currentSpeed);
}

// Start the animation when the script loads
document.addEventListener("DOMContentLoaded", () => {
    // A slight delay to let other content load before starting the animation
    setTimeout(typeWriter, 500); 
});


// /===================Toggle-button-contents================/

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", ()=> {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
        }