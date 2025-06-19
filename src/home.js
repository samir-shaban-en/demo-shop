//Логіка сторінки Home
import {
  domCategoriesLoadedHandler,
  domProductsLoadedHandler,
} from './js/handlers';

document.addEventListener('DOMContentLoaded', domCategoriesLoadedHandler);

document.addEventListener('DOMContentLoaded', domProductsLoadedHandler);
