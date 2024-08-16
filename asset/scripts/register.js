import CryptoJS from "crypto-js";

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const newsletter = document.getElementById('newsletter').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // bam mat khau roi luu 
        const hashedPassword = CryptoJS.SHA256(password).toString();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,  // luu mat khau da bam 
            phone: phone || 'No phone number provided',
            address: address || 'No address provided',
            newsletter: newsletter,
            orders: [] 
        };

        // Luu data user moi vao local storage
        localStorage.setItem('user_' + email, JSON.stringify(newUser));

        // Redirect sang login page neu dang ky thanh cong
        window.location.href = 'login.html';
    });
});
