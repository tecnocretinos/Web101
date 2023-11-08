function renderAllProducts(products) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    container.innerHTML += product.toHtml(i);
  }
}

async function fetchProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await response.json();

  let products = [];
  for (let i = 0; i < data.length; i++) {
    const productJson = data[i];
    const product = new Product(
      productJson.id,
      productJson.title,
      productJson.description,
      productJson.price,
      productJson.images,
      productJson.category.name
    );
    products.push(product);
  }
  renderAllProducts(products);
}

async function fetchRickAndMorty() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const json = await response.json();
  const data = json.results;
  console.log(data);
}

async function fetchValorant() {
  const response = await fetch("https://valorant-api.com/v1/agents");
  const json = await response.json();
  const data = json.data;
  console.log(data);
}

fetchProducts();
