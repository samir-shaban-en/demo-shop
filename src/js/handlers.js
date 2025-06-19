// Функції, які передаються колбеками в addEventListners
import { refs } from './refs';
import { getCategories, getProducts } from './products-api';

export async function domCategoriesLoadedHandler() {
  try {
    const categoriesArray = await getCategories();
    const catgMarkup = categoriesArray.map(
      ({ name, slug, url }) =>
        `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button>
 </li>
`
    );

    refs.categories.insertAdjacentHTML(
      'beforeend',
      [
        `<li class="categories__item">
        <button class="categories__btn" type="button">All</button>
      </li>
     `,
        ...catgMarkup,
      ].join('')
    );
  } catch (error) {}
}

export async function domProductsLoadedHandler() {
  try {
    const productsObj = await getProducts();
    const productsMarkup = productsObj.products
      .map(
        ({ id, price, title, brand, category, images }) =>
          `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${images[0]}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price} $</p>
 </li>`
      )
      .join('');

    refs.products.insertAdjacentHTML('beforeend', productsMarkup);
  } catch (error) {}
}
