//Допоміжні функції
import { refs } from './refs';

export function removeActiveclassAndEnableBTNS() {
  const array = Array.from(refs.categories.children);
  array.forEach(element => {
    element.firstElementChild.classList.remove('categories__btn--active');
    element.firstElementChild.disabled = false;
  });
}

export function addActiveClassToBtn(categoryBtn) {
  categoryBtn.classList.add('categories__btn--active');
}

export function disableBtn(categoryBtn) {
  if (categoryBtn.classList.contains('categories__btn--active')) {
    categoryBtn.disabled = true;
  }
}
