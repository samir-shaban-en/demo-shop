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

async function productsApiHandler(url) {
  const { data } = await axios(url);

  return data;
}
