import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  const breakpoint = window.matchMedia('(max-width:767px)');
  // ---------------------------------
  // Footer
  const listSingleOne = document.querySelectorAll('.accordion');
  const lists = document.querySelectorAll('.footer__list');
  const listButtonOne = document.querySelectorAll('.footer__button');
  const listTextOne = document.querySelectorAll('.text-accordion');

  const breakpointСhangeFooter = () => {
    if (breakpoint.matches) {
      for (let i = 0; i < lists.length; i++) {
        lists[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < lists.length; i++) {
        lists[i].style.display = 'grid';
      }
    }
  };
  breakpoint.addEventListener('change', breakpointСhangeFooter);
  breakpointСhangeFooter();
  // ---------

  const onListClick = () => {
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = 'none';
    }

    listSingleOne[1].setAttribute('data-state', '');

    if (listSingleOne[0].getAttribute('data-state') === 'active') {
      listSingleOne[0].setAttribute('data-state', '');
      listTextOne[0].textContent = 'открыть список';
    } else {
      listSingleOne[0].setAttribute('data-state', 'active');
      listTextOne[0].textContent = 'закрыть список';
      lists[0].style.display = 'grid';
    }
  };

  listButtonOne[0].addEventListener('click', onListClick);

  const onSelectClick = () => {
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = 'none';
    }

    listSingleOne[0].setAttribute('data-state', '');

    if (listSingleOne[1].getAttribute('data-state') === 'active') {
      listSingleOne[1].setAttribute('data-state', '');
      listTextOne[1].textContent = 'открыть список';
    } else {
      listSingleOne[1].setAttribute('data-state', 'active');
      listTextOne[1].textContent = 'закрыть список';
      lists[1].style.display = 'grid';
    }
  };

  listButtonOne[1].addEventListener('click', onSelectClick);

  // Main-unit
  const buttonMainUnit = document.querySelector('.main-unit__button');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      buttonMainUnit.textContent = 'Бесплатная консультация';
    } else {
      buttonMainUnit.textContent = 'Получить бесплатную консультацию';
    }
  };

  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();

  buttonMainUnit.addEventListener('click', (e) => {
    e.preventDefault();
    const id = buttonMainUnit.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

  // About-company

  const aboutCompanyWrapperAccordion = document.querySelector('.about-company__accordion');
  const aboutCompanyButton = document.querySelector('.about-company__button');
  const aboutCompanyWrapperAccordionMobile = document.querySelector('.about-company__wrapper');

  aboutCompanyWrapperAccordion.style.display = 'none';

  const textChange = () => {
    if (breakpoint.matches) {
      aboutCompanyWrapperAccordionMobile.style.display = 'none';
    } else {
      aboutCompanyWrapperAccordionMobile.style.display = 'block';
    }
  };

  breakpoint.addEventListener('change', textChange);
  textChange();

  aboutCompanyButton.addEventListener('click', () => {

    if (breakpoint.matches) {
      if (aboutCompanyWrapperAccordion.style.display === 'none') {
        aboutCompanyWrapperAccordion.style.display = 'block';
        aboutCompanyWrapperAccordionMobile.style.display = 'block';
        aboutCompanyButton.textContent = 'Свернуть';
      } else {
        aboutCompanyWrapperAccordion.style.display = 'none';
        aboutCompanyWrapperAccordionMobile.style.display = 'none';
        aboutCompanyButton.textContent = 'Подробнее';
      }
    } else {
      if (aboutCompanyWrapperAccordion.style.display === 'none') {
        aboutCompanyWrapperAccordion.style.display = 'block';
        aboutCompanyButton.textContent = 'Свернуть';
      } else {
        aboutCompanyWrapperAccordion.style.display = 'none';
        aboutCompanyButton.textContent = 'Подробнее';
      }
    }
  });

  // Service

  const serviceTitle = document.querySelector('.service__title');

  const changeServiceTitle = () => {
    if (breakpoint.matches) {
      serviceTitle.textContent = 'Товары и услуги Smart Device';
    } else {
      serviceTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
    }
  };

  breakpoint.addEventListener('change', changeServiceTitle);
  changeServiceTitle();

  // Form

  const telephones = document.querySelectorAll('input[type="tel"]');

  const prefixNumber = (str) => {
    if (str === '7') {
      return '7 (';
    }
    if (str === '8') {
      return '7 (';
    }
    if (str === '9') {
      return '7 (';
    }
    return '7 (';
  };

  // ---------------
  for (let i = 0; i < telephones.length; i++) {
    telephones[i].addEventListener('input', () => {
      const value = telephones[i].value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (telephones[i].value.includes('+8') || telephones[i].value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      //
      for (let j = 0; j < value.length && j < numberLength; j++) {
        switch (j) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[j];
      }
      //
      telephones[i].value = result;
    });
  }
  // ======================================
  const form = document.querySelector('#form');
  const formCheckbox = document.querySelector('#checkbox');
  const formLabelCheckbox = document.querySelector('#label-checkbox');

  form.addEventListener('submit', (e) => {
    if (formCheckbox.checked === false) {
      e.preventDefault();
      formLabelCheckbox.style.boxShadow = '0 0 0 5px #ffffff';
    } else {
      formLabelCheckbox.style.boxShadow = 'none';
    }

    if (telephones[0].value.length < 18) {
      e.preventDefault();
      telephones[0].style.boxShadow = '0 0 0 5px #ffffff';
    }
  });

  // Modal
  const formModal = document.querySelector('#modal-form');
  const formCheckboxModal = document.querySelector('#modal-checkbox');
  const formLabelCheckboxModal = document.querySelector('#modal-label-checkbox');

  formModal.addEventListener('submit', (e) => {
    if (formCheckboxModal.checked === false) {
      e.preventDefault();
      formLabelCheckboxModal.style.boxShadow = '0 0 0 5px #ffffff';
    } else {
      formLabelCheckboxModal.style.boxShadow = 'none';
    }

    if (telephones[1].value.length < 18) {
      e.preventDefault();
      telephones[1].style.boxShadow = '0 0 0 5px #ffffff';
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
