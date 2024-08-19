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

        // confirm password
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

        // Check xem tai khoan co chua
        if (localStorage.getItem('user_' + email)) {
            alert('An account with this email already exists!');
            return;
        }

        // Lưu data user mới vào local storage
        localStorage.setItem('user_' + email, JSON.stringify(newUser));

        // Alert success va redirect sang login page
        alert('Registration successful! You will now be redirected to the login page.');
        window.location.href = 'login.html';
    });
});
