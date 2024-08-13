const translations = {
    en: {
        //navbar
        home: "Home",
        about:"about",
        product:"product",
        news:"news",
        map:" map",
        contact: "contact",
        //product
        cosmetics:"cosmetics",
        jewelry:"jewelry",
        accessories:"accessories",
        product_categories:"product categories",
        compare:"compare",
        compare_content:"No products to compare",
        //home
        freeship:"free shipping nationwide",
        gift:"get a 350,000 VND gift",
        off:"30% off for over 5,000,000 VND order",
        quote:"Still the appearance is extremely simple with white and pink as the main colors but creates a strange attraction for those who hold the product in their hands! With the latest innovative technology, Rohto",
        author:"TUTILE _ Development Director"
        // Thêm các chuỗi dịch khác...
    },
    vi: {
        home: "Trang chủ",
        about:"Giới thiệu",
        product:"Sản phẩm",
        news:"Tin tức",
        map:" Bản đồ",
        contact: "Liên hệ",
        cosmetics:"Mỹ phẩm",
        jewelry:"Trang sức",
        accessories:"Phụ kiện",
        product_categories:"Danh mục sản phẩm",
        compare:"So sánh sản phẩm",
        compare_content:"bạn chưa có sản phẩm nào để so sánh",

        freeship:"miễn phí vận chuyển trên toàn quốc",
        gift:"nhận ngay quà tặng trị giá 350.000đ",
        off:"giảm 30% cho đơn hàng trên 5.000.000 đ",
        quote:"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hãng Rohto",
        author:"TUTILE _Giám đốc phát triển sản phẩm",
        // Thêm các chuỗi dịch khác...
    }
};

let currentLanguage = 'vi'; // Ngôn ngữ mặc định

function setLanguage(lang) {
    currentLanguage = lang;
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLanguage][key] || key;
    });
}
