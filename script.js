// Huge thanks to Traversy Media for helping me understand and implement the "Type Writter" Effect using Vanilla JS

const TypeWriter = function(textElement, words, waitTime = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const currentWord = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
        // Remove char
        this.txt = currentWord.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = currentWord.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === currentWord) {
        // Make pause at end
        typeSpeed = this.waitTime;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const textElement = document.querySelector('.generate');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const waitTime = textElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(textElement, words, waitTime);
}