const addForm = document.querySelector(".add-form");
const addId = document.querySelector(".add-id")
const products = document.querySelector(".products");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(({id, title, price, description}) => createElem(id, title, price, description));

  e.target.id.value = "";
});

function createElem(id, title, price, description) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const description_p = document.createElement('p');
    const id_p = document.createElement('p');
    container.append(title_p,price_p,description_p,id_p)
    title_p.innerText = title;
    price_p.innerText = `price: ${price}`;
    description_p.innerText = `description: ${description}`;
    id_p.innerText = `id number: ${id}`;
    container.classList.add('product')
    title_p.classList.add('sub-header')
    products.append(container);
};