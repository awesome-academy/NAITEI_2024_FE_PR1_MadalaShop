document.addEventListener('DOMContentLoaded', () => {
    // Đảm bảo rằng các sản phẩm đã được tải từ localStorage và hiển thị
    renderProducts(); // Giả sử bạn có hàm renderProducts() đã được định nghĩa trước đó

    // Thêm các sự kiện hoặc logic khác nếu cần
    const buttons = document.querySelectorAll('.item button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
});
