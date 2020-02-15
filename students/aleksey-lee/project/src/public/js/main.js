//Общий класс для единицы товара
class Item {
  constructor(id, name, price, img, cartImage) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.cartImage = cartImage;
  }
}

//Класс Вывода единицы товара в каталоге
class GoodsItem extends Item {
  //Вывод единицы товара в каталоге
  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" 
                    data-id="${this.id}"
                    data-name="${this.name}"
                    data-image="${this.img}"
                    data-cartimage="${this.cartImage}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`;
  }
}

//Класс каталога
class GoodsList {
  constructor(container) {
    this.goods = [];
    this.container = document.querySelector(container);
  }
  fetchGoods() {
    this.goods = [
      {
        id: 1,
        name: "Notebook",
        price: 1000,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 2,
        name: "Display",
        price: 200,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 3,
        name: "Keyboard",
        price: 20,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 4,
        name: "Mouse",
        price: 10,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 5,
        name: "Phones",
        price: 25,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 6,
        name: "Router",
        price: 30,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 7,
        name: "USB-camera",
        price: 18,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      },
      {
        id: 8,
        name: "Gamepad",
        price: 24,
        img: "https://placehold.it/200x150",
        cartImage: "https://placehold.it/100x80"
      }
    ];
  }

  //Вывод каталога
  render() {
    let listHtml = "";
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(
        good.id,
        good.name,
        good.price,
        good.img,
        good.cartImage
      );
      listHtml += goodItem.render();
    });
    this.container.innerHTML = listHtml;
  }

  //метод, определяющий суммарную стоимость всех товаров (из ДЗ)
  getTotalPrice() {
    return this.goods.reduce((sum, good) => sum + good.price, 0);
  }
}

//Класс вывода единицы товара в корзине
class CartItem extends Item {
  constructor(id, name, price, img, cartImage, quantity) {
    super(id, name, price, img, cartImage);
    this.quantity = quantity;
  }

  //Вывод товара в корзине
  render() {
    return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.name}</p>
                            <p class="product-quantity">Quantity: ${
                              this.quantity
                            }</p>
                            <p class="product-single-price">$${
                              this.price
                            } each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity *
                          this.price}</p>
                        <button class="del-btn" data-id="${
                          this.id
                        }">&times;</button>
                    </div>
                </div>`;
  }
}

//Класс корзины
class Cart {
  constructor(container) {
    this.products = [];
    this.container = document.querySelector(container);

    this._bindHandlers();
  }

  //Вывод корзины
  render() {
    let listHtml = "";
    this.products.forEach(product => {
      const productItem = new CartItem(
        product.id,
        product.name,
        product.price,
        product.img,
        product.cartImage,
        product.quantity
      );
      listHtml += productItem.render();
    });
    listHtml += `<div>Total price: ${this.getTotalPrice()} $</div>`;
    this.container.innerHTML = listHtml;
  }

  // Добавление продуктов в корзину
  addProduct(product) {
    let productId = +product.dataset["id"];
    let find = this.products.find(element => element.id === productId);

    if (!find) {
      this.products.push({
        name: product.dataset["name"],
        id: productId,
        img: product.dataset["cartimage"],
        price: +product.dataset["price"],
        quantity: 1
      });
    } else {
      find.quantity++;
    }

    this.render();
  }

  //удаление товаров
  removeProduct(product) {
    let productId = +product.dataset["id"];
    let find = this.products.find(element => element.id === productId);
    if (find.quantity > 1) {
      find.quantity--;
    } else {
      this.products.splice(this.products.indexOf(find), 1);
    }
    this.render();
  }

  //Общая цена товаров в корзине
  getTotalPrice() {
    return this.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  }

  _bindHandlers() {
    //кнопка скрытия и показа корзины
    document.querySelector(".btn-cart").addEventListener("click", () => {
      document.querySelector(".cart-block").classList.toggle("invisible");
    });

    //кнопки удаления товара (добавляется один раз)
    document.querySelector(".cart-block").addEventListener("click", evt => {
      if (evt.target.classList.contains("del-btn")) {
        userCart.removeProduct(evt.target);
      }
    });

    //кнопки покупки товара (добавляется один раз)
    document.querySelector(".products").addEventListener("click", evt => {
      if (evt.target.classList.contains("buy-btn")) {
        userCart.addProduct(evt.target);
      }
    });
  }
}

const list = new GoodsList("#goods-list");
list.fetchGoods();
list.render();

console.log(list.getTotalPrice());

const userCart = new Cart("#cart-block");
