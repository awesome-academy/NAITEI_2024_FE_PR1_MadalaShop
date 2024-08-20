function loadProductsFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        return JSON.parse(savedProducts);
    }
    return products; // Fallback to default products if no saved data
}

function displayProducts(productsToDisplay) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Clear previous content
    
    productsToDisplay.forEach(product => {
        const productElement = `
        <div class="p-4 border-t mb-4 flex">
            <img src="${product.image}" alt="${product.title}" class="w-32 h-32 mr-4">
            <div class="flex flex-col justify-between">
                <div>
                    <h1 class="text-xl font-semibold product-title">${product.title}</h1>
                    <div class="user review flex text-gray-300">${product.review}</div>
                    <div class="descript text-gray-300 w-96 h-20 overflow-scroll">
                        ${product.desc}
                    </div>
                    <div class="mt-4">
                        ${product.price}
                    </div>
                </div>
                <div class="btn-cluster mt-4">
                    <button data-i18n="buy_now" class="border mr-2 py-2 px-4 rounded-lg">${product.buttonText}</button>
                    <button class="like-button green-btn rounded-lg py-2 px-3 text-white" data-id="${product.id}">
                        ${product.liked ? '♡' : '♥'}
                    </button>
                </div>
            </div>
        </div>
    `;
        productDisplay.innerHTML += productElement;
    });
    // Thêm sự kiện cho nút like sau khi các phần tử được thêm vào DOM
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            if (product) {
                product.liked = !product.liked;
                event.target.textContent = product.liked ? '♡' : '♥';
                localStorage.setItem('products', JSON.stringify(products));
            }
        });
    });
}

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display all products when the page loads
window.onload = function() {
    
    displayProducts(products);
    products = loadProductsFromLocalStorage();
};

function filterProductstag(tag) {
    const filteredProductstag = products.filter(product => product.tag === tag);
    displayProducts(filteredProductstag);
}
