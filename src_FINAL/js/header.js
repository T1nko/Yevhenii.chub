document.addEventListener('scroll', function () {
    const headerTomat = document.querySelector('.header-tomat');
    const headerBar = document.querySelector('.headerBar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
      headerTomat.classList.add('hidden');
      headerBar.classList.add('headerBar_shadow');
    } else {
      headerTomat.classList.remove('hidden');
      headerBar.classList.remove('headerBar_shadow');
    }
  });