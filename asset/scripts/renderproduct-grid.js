// renderProducts.js
document.addEventListener('DOMContentLoaded', () => {
    const products = JSON.parse(localStorage.getItem('products'));

    if (products) {
        const productGrid = document.querySelector('.grid');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('item', 'h-96', 'w-56', 'py-6', 'mx-auto');

            productDiv.innerHTML = `
                <img class="mx-auto w-40" src="${product.image}" alt="${product.title}">
                <div class="justify-between">
                    <div class="mx-auto text-center">
                        <div class="text-gray-300">${product.brand}</div>
                        <h2 class="text-lg font-semibold mt-2">${product.title}</h2>
                        <div class="mt-4">${product.price}</div>
                        <div class="btn-cluster mx-auto mt-4">
                            <button data-i18n="buy_now"class=" green-btn text-white border mr-2 py-2 px-4 rounded-lg" >${product.buttonText}</button>
                        </div>
                    </div>
                </div>
            `;
            productGrid.appendChild(productDiv);
        });
    }
});
