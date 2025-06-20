// Функції для роботи з бекендом
import axios from 'axios';
const currentPage = 1;
const productsCategoriesUrl = 'https://dummyjson.com/products/categories';
const productsUrl = `https://dummyjson.com/products?limit=12&skip=${
  (currentPage - 1) * 12
}`;

export async function getCategories() {
  return productsApiHandler(productsCategoriesUrl);
}

export async function getProducts() {
  return productsApiHandler(productsUrl);
}

export async function productsApiHandler(url) {
  const { data } = await axios(url);

  return data;
}

export async function getProductsByCategory(category) {
  category = category.split(' ');

  const { data } = await axios(
    `https://dummyjson.com/products/category/${category.join(
      '-'
    )}?limit=12&skip=${(currentPage - 1) * 12}`
  );

  return data;
}
