const addForm = document.querySelector(".add-form");
const addId = document.querySelector(".add-id")
const products = document.querySelector(".products");

let arr = [];

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then((value) =>{
    arr.push(value);
    rerender();
    // createElem(value.id, value.title, value.price, value.description)
  } );

  e.target.id.value = "";
});

// arr.forEach((item) => createElem(item.id, item.title, item.price, item.description))

function createElem(id, title, price, description) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const description_p = document.createElement('p');
    const id_p = document.createElement('p');
    const button = document.createElement('button');
    container.append(title_p,price_p,description_p,id_p, button)
    title_p.innerText = title;
    price_p.innerText = `price: ${price}`;
    description_p.innerText = `description: ${description}`;
    id_p.innerText = `id number: ${id}`;
    button.innerText = 'Remove';
    button.classList.add('btn');
    button.addEventListener("click", () => {
      deleteProduct(id);
    });
    container.classList.add('product')
    title_p.classList.add('sub-header')
    products.append(container);
};

function deleteProduct(id) {
  arr = arr.filter((product) => product.id !== id);
  rerender();
}

function rerender() {
  products.innerText = "";
  if (arr.length === 0) {
    const no_products = document.createElement("p");
    no_products.innerText = "Товаров нет";
    products.append(no_products);
  } else {
    arr.forEach(({ id, title, price, description }) => {
      createElem(id, title, price, description);
    });
    
  }
}
rerender();