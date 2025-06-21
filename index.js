import"./assets/styles-BK7AYJoX.js";import{a as c}from"./assets/vendor-DGDcxXwr.js";const r={categories:document.querySelector(".categories"),products:document.querySelector(".products")},a=1,g="https://dummyjson.com/products/categories",m=`https://dummyjson.com/products?limit=12&skip=${(a-1)*12}`;async function _(){return n(g)}async function y(){return n(m)}async function n(t){const{data:e}=await c(t);return e}async function f(t){t=t.split(" ");const{data:e}=await c(`https://dummyjson.com/products/category/${t.join("-")}?limit=12&skip=${(a-1)*12}`);return e}function b(t){return[`<li class="categories__item">
        <button class="categories__btn" type="button">All</button>
      </li>
     `,...t.map(({name:s})=>`<li class="categories__item">
     <button class="categories__btn" type="button">${s}</button>
   </li>
  `)].join("")}function i(t){return t.map(({id:e,price:s,title:o,brand:u,category:l,images:p})=>`<li class="products__item" data-id="${e}">
    <img class="products__image" src="${p[0]}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${u}</span></p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: ${s} $</p>
 </li>`).join("")}function C(){Array.from(r.categories.children).forEach(e=>{e.firstElementChild.classList.remove("categories__btn--active"),e.firstElementChild.disabled=!1})}function L(t){t.classList.add("categories__btn--active")}function $(t){t.classList.contains("categories__btn--active")&&(t.disabled=!0)}async function h(){try{const t=await _();r.categories.insertAdjacentHTML("beforeend",b(t))}catch(t){console.log(t.message)}}async function d(){try{const{products:t}=await y();r.products.innerHTML=i(t)}catch(t){console.log(t.message)}}async function v(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent,s=t.target;if(C(),L(s),$(s),e==="All"){d();return}try{const{products:o}=await f(e);r.products.innerHTML=i(o)}catch(o){console.log(o.message)}}document.addEventListener("DOMContentLoaded",h);document.addEventListener("DOMContentLoaded",d);r.categories.addEventListener("click",v);
//# sourceMappingURL=index.js.map
