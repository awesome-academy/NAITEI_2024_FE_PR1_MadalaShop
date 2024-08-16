document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const imageMap = {
        '1': '../asset/image/blog1.png',
        '2': '../asset/image/blog2.png',
        '3': '../asset/image/blog3.png',
        '4': '../asset/image/blog4.png',
        '5': '../asset/image/blog5.png',
        '6': '../asset/image/blog6.png',
    }; 
    const blogImage = document.getElementById('blogImage');
    if (blogImage && imageMap[postId]) {
        blogImage.src = imageMap[postId];
    }
});
