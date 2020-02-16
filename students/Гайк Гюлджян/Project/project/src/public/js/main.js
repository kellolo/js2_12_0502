const goods = [
  {
    id: 1,
    title: "Display",
    price: 200,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 2,
    title: "Keyboard",
    price: 50,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 3,
    title: "Mouse",
    price: 20,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 4,
    title: "Router",
    price: 100,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 5,
    title: "Phones",
    price: 200,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 6,
    title: "Tablets",
    price: 150,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 7,
    title: "USB-Camera",
    price: 15,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 8,
    title: "Gamepad",
    price: 100,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 9,
    title: "Notebook",
    price: 400,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  },
  {
    id: 10,
    title: "Macintosh",
    price: 1200,
    img: "https://via.placeholder.com/200x150",
    cartImage: "https://via.placeholder.com/100x80"
  }
];

class Item {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = item.img;
  }
  render() {
    return `<div class="product-item">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} $</p>
                      <button class="buy-btn" data-value="addToCart" data-id="${this.id}">Купить</button>
                  </div>
              </div>`;
  }
}

class List {
  constructor(container) {
    this.container = document.querySelector(container);
    this.goods = [];
  }
  initListeners() {
    const buttons = [...this.container.querySelectorAll("button")];
    buttons.forEach(button => {
      button.addEventListener("click", evt => {
        if (evt.target.dataset.value === "addToCart") {
          this.addToCart(this.findElement(parseInt(evt.target.dataset.id, 10)));
        } else if (evt.target.dataset.value === "removeToCart") {
          this.deleteItem(
            this.findElement(parseInt(evt.target.dataset.id, 10))
          );
        }
      });
    });
  }
  findElement(itemId) {
    return this.goods.find(el => el.id === itemId);
  }
  totalCost() {
    let sum = 0;
    this.goods.forEach(item => (sum += item.price));
    return sum;
  }
  getTotalPrice() {
    return this.goods.reduce((sum, item) => sum + item.price, 0);
  }

  fetchData() {
    this.goods = goods;
    this.render();
    this.totalCost();
  }
  render() {
    let listHtml = "";
    this.goods.forEach(item => {
      listHtml += new Item(item).render();
    });
    this.container.innerHTML = listHtml;
    this.initListeners();
  }
}

class Catalog extends List {
  addToCart(itemElem) {
    cart.checkQuantity(itemElem);
  }
}

const catalog = new Catalog(".products");
catalog.fetchData();

class ItemCart {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = item.cartImage;
    this.quantity = item.quantity;
  }
  render() {
    return `<div class="cart-item" data-id="${this.id}">
                  <div class="product-bio">
                      <img src="${this.img}" alt="Some image">
                      <div class="product-desc">
                          <p class="product-title">${this.title}</p>
                          <p class="product-quantity">Quantity: ${
                            this.quantity
                          }</p>
                          <p class="product-single-price">$${
                            this.price
                          } each</p>
                      </div>
                  </div>
                  <div class="right-block">
                      <p class="product-price">${this.quantity * this.price}</p>
                      <button class="del-btn" data-id="${
                        this.id
                      }" data-value="removeToCart">&times;</button>
                  </div>
              </div>`;
  }
}

class Cart extends List {
  constructor(...attrs) {
    super(attrs);
  }
  checkQuantity(item) {
    if (this.findElement(item.id)) {
      this.goods[this.findItemIndex(item)].quantity++;
      this.render();
    } else {
      item.quantity = 1;
      this.goods.push(item);
      this.render();
    }
  }
  findItemIndex(item) {
    return this.goods.findIndex(el => el === item);
  }
  incQuantity() {}
  decQuantity() {}
  deleteItem(itemRemoveId) {
    this.goods.splice(this.findItemIndex(itemRemoveId), 1);
    this.render();
  }
  render() {
    let listHtml = "";
    this.goods.forEach(item => {
      listHtml += new ItemCart(item).render();
    });
    listHtml += `<div>Total price: ${this.getTotalPrice()} $</div>`;
    this.container.innerHTML = listHtml;
    this.initListeners();
  }
}

const cart = new Cart(".cart-block");

document.querySelector(".btn-cart").addEventListener("click", () => {
  document.querySelector(".cart-block").classList.toggle("invisible");
});
