// products.js
const products = [
    {
        id: 1,
        brand: "Brand A",
        title: "Product A",
        price: "100.000 VND",
        desc:  "descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc",
        image: "../asset/image/product-img.png"
    },
    {
        id: 2,
        brand: "Brand B",
        title: "Product B",
        price: "200.000 VND",
        desc:  "d Product BProduct BProduct BProduct BProduct BProduct BProduct B",
        image: "../asset/image/product-img.png"
    },
    {
        id: 3,
        brand: "Brand C",
        title: "Product C",
        price: "300.000 VND",
        desc:  "d Brand CBrand CBrand CBrand CBrand CBrand CBrand CBrand CBrand C",
        image: "../asset/image/product-img.png"
    },
    {
        id: 4,
        brand: "Brand D",
        title: "Product D",
        price: "400.000 VND",
        desc:  "descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc",
        image: "../asset/image/product-img.png"
    },
    {
        id: 5,
        brand: "Brand E",
        title: "Product E",
        price: "500.000 VND",
        desc:  "dProduct EProduct EProduct EProduct EProduct EProduct EProduct E",
        image: "../asset/image/product-img.png"
    },
    {
        id: 6,
        brand: "Brand F",
        title: "Product F",
        price: "600.000 VND",
        desc:  "Product FProduct FProduct FProduct FProduct FProduct FProduct FProduct F",
        image: "../asset/image/product-img.png"
    }
];

// Lưu dữ liệu sản phẩm vào local storage
localStorage.setItem('products', JSON.stringify(products));
