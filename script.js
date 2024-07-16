document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const ulElement = document.querySelector('.nav-scroll');
    const logoNameElement = document.querySelector('.logo-name');
    const logoElement = document.querySelector('.logo');

    if (scrollPosition > 70) {
        ulElement.classList.add('scrolled');
        logoNameElement.classList.add('scrolled');
        logoElement.setAttribute('src', "./assets/logo2.png");
    } else {
        ulElement.classList.remove('scrolled');
        logoNameElement.classList.remove('scrolled');
        logoElement.setAttribute('src', "./assets/logo1.png");
    }
});