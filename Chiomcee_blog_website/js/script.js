document,addEventListener('DOMContentLoaded', () => {
    //Animate the welcome texts
    const welcomeTexts = document.querySelectorAll('#home p, #home h2');
    
    welcomeTexts.forEach(text => {
        text.computedStyleMap.opacity = '0';
    });

    setTimeout(() => {
        welcomeTexts.forEach(text => {
            text.computedStyleMap.opacity = "i";
            text.computedStyleMap.transition = 'opacity is ease-in-out';
        });
    }, 300);   
});
// Smooth Scrolling for navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection =document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});