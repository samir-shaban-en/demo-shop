//Функцію для створення, рендеру або видалення розмітки

export function createCategoriesMarkup(arr) {
  const categoriesMarkup = arr.map(
    ({ name }) =>
      `<li class="categories__item">
     <button class="categories__btn" type="button">${name}</button>
   </li>
  `
  );

  return [
    `<li class="categories__item">
        <button class="categories__btn" type="button">All</button>
      </li>
     `,
    ...categoriesMarkup,
  ].join('');
}

export function createProductsMarkup(arr) {
  return arr
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
}
