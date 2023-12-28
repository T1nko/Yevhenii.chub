document.addEventListener('DOMContentLoaded', function () {
    const mainTitleBanner = document.querySelector('.mainTitle-banner');

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const bannerPosition = mainTitleBanner.getBoundingClientRect().top;

        if (bannerPosition <= window.innerHeight) {
            mainTitleBanner.style.transform = 'translateX(0) rotate(360deg)';
            document.body.classList.add('animating');
        } else {
            mainTitleBanner.style.transform = 'translateX(100%) rotate(360deg)';
            document.body.classList.remove('animating');
        }
    }

    function initBannerAnimation() {
        setTimeout(function () {
            handleScroll();
            window.removeEventListener('scroll', handleScroll);
        }, 500);
    }

    window.addEventListener('load', initBannerAnimation); // Викликати після завантаження сторінки
});