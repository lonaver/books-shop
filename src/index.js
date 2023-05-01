import './components/js/defaultUrl';
import { loadFirst } from './components/js/categories';
import { loadTopBooks } from './components/js/topBooks';
import { loadSupport } from './components/js/support';
import { renderHeader } from './components/js/header';
import { modalRender } from './components/js/modal';
import { CURRENT_PAGE_HOME } from './components/js/valuesCurrentPage';
import { openMenu } from './components/js/menu';
import { scrollFunction } from './components/js/scrollUp';
import {
  setClassByTheme,
  setClassTitle,
  setClassHeader,
} from './components/js/setThemePage';

const loadFirstPage = () => {
  modalRender();

  renderHeader(CURRENT_PAGE_HOME);
  openMenu();
  loadFirst();
  loadSupport();
  loadTopBooks();

  setClassByTheme();
  setClassHeader();
  setClassTitle();
};

window.addEventListener('load', loadFirstPage);
window.onscroll = function () {
  scrollFunction();
};
