document.addEventListener('DOMContentLoaded', () => {
    // Các biến
    const productContainers = document.querySelectorAll('.trending-product-card');
    const resetIcons = document.querySelectorAll('.reset-icon');
    const slideContainer = document.querySelector('.social-slides');
    let currentIndex = 0;
    let offset = 0;
    const interval = 5000;
    const travelDistance = slideContainer.firstElementChild.offsetWidth; // Khoảng cách

    // Các hàm
    function showProducts(startIndex, productsToShow) {
        // Ẩn tất cả các sản phẩm
        productContainers.forEach(container => container.classList.add('hidden'));

        // Hiển thị các sản phẩm theo index
        for (let i = startIndex; i < startIndex + productsToShow; i++) {
            let index = i % productContainers.length;
            productContainers[index].classList.remove('hidden');
        }
    }

    function cycleProducts() {
        // Xác định số sản phẩm hiển thị theo size màn hình
        const screenWidth = window.innerWidth;
        let productsToShow = screenWidth >= 1024 ? 4 : screenWidth >= 750 ? 2 : 1;

        showProducts(currentIndex, productsToShow);
        currentIndex = (currentIndex + 1) % productContainers.length;
    }

    function slideLogos() {
        offset -= travelDistance;
        if (Math.abs(offset) >= slideContainer.scrollWidth / 2) {
            offset = 0;
        }
        slideContainer.style.transform = `translateX(${offset}px)`;
        slideContainer.style.transition = 'transform 0.5s ease-out';
    }

    // Xử lý khi trang được tải
    cycleProducts(); // Chạy khi tải trang
    let productInterval = setInterval(cycleProducts, interval);

    // Xử lý khi click vào icon reset
    resetIcons.forEach(resetIcon => {
        resetIcon.addEventListener('click', () => {
            clearInterval(productInterval);
            currentIndex = 0;
            cycleProducts();
            productInterval = setInterval(cycleProducts, interval);
        });
    });

    // Xử lý khi thay đổi size màn hình
    window.addEventListener('resize', () => {
        clearInterval(productInterval);
        cycleProducts();
        productInterval = setInterval(cycleProducts, interval);
    });

    // Xử lý cho các logo di chuyển
    slideContainer.innerHTML += slideContainer.innerHTML; // Tạo hiệu ứng vòng lặp
    setInterval(slideLogos, 5000);
});
