    const itemsPerPage = 2; // Số lượng sản phẩm mỗi trang
    const products = document.querySelectorAll('.item');
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let currentPage = 1;

    const paginationElement = document.getElementById('pagination');
    const pageNumbersElement = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function displayPage(page) {
        products.forEach((item, index) => {
            item.style.display = 'none';
        });

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        for (let i = start; i < end && i < products.length; i++) {
            products[i].style.display = 'flex';
        }

        updatePaginationButtons(page);
    }

    function updatePaginationButtons(page) {
        pageNumbersElement.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberBtn = document.createElement('button');
            pageNumberBtn.textContent = i;
            pageNumberBtn.classList.add('px-4', 'py-2', 'mx-1', 'bg-gray-300', 'rounded');
            if (i === page) {
                pageNumberBtn.classList.add('active');
            }
            pageNumberBtn.addEventListener('click', () => {
                currentPage = i;
                displayPage(currentPage);
            });
            pageNumbersElement.appendChild(pageNumberBtn);
        }

        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });

    displayPage(currentPage);
