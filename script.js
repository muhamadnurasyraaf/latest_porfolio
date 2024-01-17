document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    function changeSectionState() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight / 2) && (rect.bottom >= window.innerHeight / 2);

            if (isInView) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', changeSectionState);
    window.addEventListener('resize', changeSectionState);

    // Trigger initial check when the page loads
    changeSectionState();

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu ul');

    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
