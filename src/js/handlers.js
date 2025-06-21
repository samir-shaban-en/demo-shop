// Функції, які передаються колбеками в addEventListners
import { refs } from './refs';

import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from './products-api';

import {
  createCategoriesMarkup,
  createProductsMarkup,
} from './render-function';

import {
  removeActiveclassAndEnableBTNS,
  addActiveClassToBtn,
  disableBtn,
} from './helpers';

export async function domCategoriesLoadedHandler() {
  try {
    const categoriesArray = await getCategories();

    refs.categories.insertAdjacentHTML(
      'beforeend',
      createCategoriesMarkup(categoriesArray)
    );
  } catch (error) {
    console.log(error.message);
  }
}

export async function domProductsLoadedHandler() {
  try {
    const { products } = await getProducts();

    refs.products.innerHTML = createProductsMarkup(products);
  } catch (error) {
    console.log(error.message);
  }
}

export async function onCategorieBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const categoryName = e.target.textContent;
  const categoryBtn = e.target;

  removeActiveclassAndEnableBTNS();
  addActiveClassToBtn(categoryBtn);
  disableBtn(categoryBtn);

  if (categoryName === 'All') {
    domProductsLoadedHandler();
    return;
  }

  try {
    const { products } = await getProductsByCategory(categoryName);

    refs.products.innerHTML = createProductsMarkup(products);
  } catch (error) {
    console.log(error.message);
  }
}
