import { CURRENT_PAGE_HOME } from './valuesCurrentPage';
import url_photoUser from '../../images/photoUser.png';
import url_bcgImg from '../../images/menuBcgImg.png';

const mobileMenu = document.querySelector('.js_menu_container');
const mobileImgBcg = document.querySelector('.img_bcg_rotate');

const toggleMenu = () => {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.add('is-open');
  // const scrollLockMethod = !isMenuOpen
  //   ? 'disableBodyScroll'
  //   : 'enableBodyScroll';
  // bodyScrollLock[scrollLockMethod](document.body);
};

export const handlerOpenMenu = currentPage => {
  toggleMenu();
  renderMenu(currentPage);
};

const renderMenu = currentPage => {
  console.log('currentPage', currentPage);
  const imgPhotoUser = ` <img class="mobile_photo_user" src=${url_photoUser} alt="photo user" />`;
  const mobileUser = document.querySelector('.thumb_photo_mobile');
  mobileUser.insertAdjacentHTML('beforeEnd', imgPhotoUser);

  const homePage = document.querySelector('.header_link_home_mobile');
  const shoppingPage = document.querySelector('.header_link_shopping_mobile');
  if (currentPage === CURRENT_PAGE_HOME) {
    homePage.classList.replace('page', 'current_page');
    shoppingPage.classList.replace('current_page', 'page');
  } else {
    shoppingPage.classList.add('page');
    shoppingPage.classList.replace('page', 'current_page');
    homePage.classList.replace('current_page', 'page');
  }
  mobileImgBcg.style.backgroundImage = `url(${url_bcgImg})`;
};

export const openMenu = () => {
  console.log('here');
  const currentPage = CURRENT_PAGE_HOME;

  renderMenu(currentPage);
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  //console.log(mobileImgBcg.style.backgroundImage);

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  // mobileMenu.classList.remove('is-open');
  // openMenuBtn.setAttribute('aria-expanded', false);
  //bodyScrollLock.enableBodyScroll(document.body);
  // });
};
