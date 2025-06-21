//Логіка сторінки Home
import { refs } from './js/refs';
import {
  domCategoriesLoadedHandler,
  domProductsLoadedHandler,
  onCategorieBtnClick,
} from './js/handlers';

document.addEventListener('DOMContentLoaded', domCategoriesLoadedHandler);

document.addEventListener('DOMContentLoaded', domProductsLoadedHandler);

refs.categories.addEventListener('click', onCategorieBtnClick);
