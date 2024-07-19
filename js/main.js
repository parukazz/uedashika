const initApp = () => {
  const openBtn = document.getElementById('openmenu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('inline-block');
  }

  openBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
}

const placeholderApp = () => {
  const inputDate = document.getElementById('date');
  const placeholderText = 'Select Date';

  const setPlaceholder = () => {
    if (!inputDate.value) {
      inputDate.setAttribute('data-placeholder', inputDate.getAttribute('placeholder'));
      inputDate.setAttribute('placeholder', placeholderText);
    } else {
      inputDate.value = '';
      inputDate.setAttribute('placeholder', inputDate.getAttribute('data-placeholder'));
    }
  }

  setPlaceholder();
}


document.addEventListener('DOMContentLoaded', initApp, placeholderApp);