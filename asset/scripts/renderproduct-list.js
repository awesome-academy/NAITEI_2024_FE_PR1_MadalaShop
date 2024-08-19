function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productContainer = document.querySelector('.mx-10');

    if (products.length > 0) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('item', 'flex', 'h-72', 'w-full', 'border-t', 'border-b', 'border-gray-300', 'py-6');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
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
                        <button data-i18n="buy_now"class="border mr-2 py-2 px-4 rounded-lg" >${product.buttonText}</button>
                        <button class="green-btn py-3 px-4 text-white text-sm rounded-lg">♥</button>
                    </div>
                </div>
            `;
            productContainer.appendChild(productItem);
        });
    } else {
        productContainer.innerHTML = '<p>No products available.</p>';
    }
}
window.onload = renderProducts;
