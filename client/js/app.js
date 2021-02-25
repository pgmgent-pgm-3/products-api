const apiurl = "http://localhost:3000/api/products";

const app = {
  init() {
    this.fetchProducts();
  },
  async fetchProducts() {
    const res = await fetch(apiurl);
    const products = await res.json();

    const listitems = products.map((product) => {
      return `<li>${product.name}</li>`;
    });

    console.log(listitems);

    document.body.innerHTML = `
            <ul>
                ${listitems.join("")}
            </ul>
        `;
  },
};

app.init();
