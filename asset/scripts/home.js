document.querySelectorAll('.tag').forEach(function(tagElement) {
    tagElement.addEventListener('click', function() {
        const tag = 'nuochoa'; 
        window.location.href = `product-list.html?tag=${tag}`;
    });
});
