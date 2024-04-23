/*
const producto1 = {
    id: "id001",
    foto: "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    nombre: "celular",
    precio: 400,
    stock: 2
};

console.log(producto1);
*/

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
    }
    get Supplier() {
        return this._supplier;
    }

    set Supplier(newsupplier) {
        this._supplier = newsupplier;
    }

    sellUnits(units) {
        this.stock = this.stock - units
    }
    get title() {
        return this._title;
    }
    set title(newtitle) {
        this._title = newtitle;
    }

    sellUnits(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
            console.log(`${quantity} unidades de ${this._title} vendidas`);
        } else {
            console.error(`No hay suficientes unidades de ${this._title} en stock. Solo quedan ${this.stock}`);
        }
    }
}


const prod1 = new Product("001", "Celular Galaxy", 400, 10, ["imagen1.jpg", "imagen2.jpg"], true);
const prod2 = new Product("002", "Laptop Gamer", 800, 5, ["imagen3.jpg", "imagen4.jpg"], false);
const prod3 = new Product("003", "Smartwatch Deportivo", 200, 15, ["imagen5.jpg", "imagen6.jpg"], true);
const prod4 = new Product("004", "Zapatos", 500, 10, ["images7.jpg"], true, "Rotito");

const products = [prod1, prod2, prod3, prod4];

prod4.Supplier = "Bomnito";


console.log(products);


