document,addEventListener('DOMContentLoaded', () => {
    //Animate the welcome texts
    const welcomeTexts = document.querySelectorAll('#home p, #home h2');
    
    welcomeTexts.forEach(text => {
        text.computedStyleMap.opacity = '0';
    });

    
}