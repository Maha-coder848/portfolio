document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hireMeButton = document.getElementById('hire-me');

    hireMeButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetSection = document.getElementById('contact');

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
