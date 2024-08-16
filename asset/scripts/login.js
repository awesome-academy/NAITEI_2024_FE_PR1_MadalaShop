import CryptoJS from "crypto-js";

document.addEventListener('DOMContentLoaded', function() {
    const sampleUsers = [
        {
            firstName: "Linh",
            lastName: "Bui",
            email: "linh@gmail.com",
            password: CryptoJS.SHA256("123").toString(), 
            newsletter: true,
            address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh, Việt Nam",
            phone: "+84 123 456 789",
            orders: [
                { id: "#1005", date: "2024-04-10", status: "Paid", total: "500.000đ", debt: "0đ" },
                { id: "#1006", date: "2024-05-15", status: "Pending", total: "600.000đ", debt: "100.000đ" }
            ]
        },
        {
            firstName: "Trang",
            lastName: "Tran",
            email: "trang@gmail.com",
            password: CryptoJS.SHA256("456").toString(), 
            newsletter: false,
            address: "456 Đường Phạm Ngũ Lão, Quận 3, TP. Hồ Chí Minh, Việt Nam",
            phone: "+84 987 654 321",
            orders: [
                { id: "#1007", date: "2024-06-20", status: "Paid", total: "700.000đ", debt: "0đ" },
                { id: "#1008", date: "2024-07-25", status: "Half Paid", total: "800.000đ", debt: "400.000đ" }
            ]
        }
    ];
    
    //Luu sample vao localStorage
    sampleUsers.forEach(user => {
        localStorage.setItem('user_' + user.email, JSON.stringify(user));
    });

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        //Lay ra data tu localStorage
        const storedUserData = localStorage.getItem('user_' + email);

        if (!storedUserData) {
            alert('No account found with that email!');
            return;
        }

        const userData = JSON.parse(storedUserData);

        //Hash input password
        const hashedInputPassword = CryptoJS.SHA256(password).toString();

        //Check password oke k
        if (userData.password !== hashedInputPassword) {
            alert('Incorrect password!');
            return;
        }

        // Save data login in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
    });
});
