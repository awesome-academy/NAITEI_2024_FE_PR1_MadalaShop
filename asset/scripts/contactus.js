function initMap() {
    var location = { lat: 10.804861, lng: 106.721917 }; // Specified coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const contactForm = document.querySelector('form');

    // Check xem login chua 
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        nameField.value = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        emailField.value = loggedInUser.email;
    } else {
        // Pre-fill name+email
        if (localStorage.getItem('contactFormName')) {
            nameField.value = localStorage.getItem('contactFormName');
        }
        if (localStorage.getItem('contactFormEmail')) {
            emailField.value = localStorage.getItem('contactFormEmail');
        }
    }

    // Pre-fill message neu co trong local storage
    if (localStorage.getItem('contactFormMessage')) {
        messageField.value = localStorage.getItem('contactFormMessage');
    }

    // Luu form data vao local storage
    nameField.addEventListener('input', () => localStorage.setItem('contactFormName', nameField.value));
    emailField.addEventListener('input', () => localStorage.setItem('contactFormEmail', emailField.value));
    messageField.addEventListener('input', () => localStorage.setItem('contactFormMessage', messageField.value));

    //Submit Form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const message = messageField.value.trim();

        if (message) {
            //Luu message data 
            console.log('Message submitted:', message);

            // Submit xong xoa value 
            messageField.value = '';

            // Remove the message khoi local storage
            localStorage.removeItem('contactFormMessage');

            alert('Your message has been submitted!');
        } else {
            alert('Please enter a message before submitting.');
        }
    });
});
