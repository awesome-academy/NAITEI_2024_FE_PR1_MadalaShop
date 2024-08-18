document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const blogImage = document.getElementById('blogImage');
    const blogTitle = document.querySelector('[data-i18n="blog_heading_detail"]');
    const blogIntro = document.querySelector('[data-i18n="blog_intro"]');
    const blogAuthorDate = document.querySelector('[data-i18n="blog_author_date"]');
    const blogReadMore = document.querySelector('[data-i18n="blog_read_more"]');
    const blogComments = document.querySelector('[data-i18n="blog_comments"]');

    // Check xem co trong local storage
    let post = JSON.parse(localStorage.getItem(`post_${postId}`));

    if (!post) {
        //fetch API
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        try {
            const response = await fetch(apiUrl);
            post = await response.json();

            // store in localstorage
            localStorage.setItem(`post_${postId}`, JSON.stringify(post));
        } catch (error) {
            console.error('Error fetching post:', error);
            return;
        }
    }

    if (post) {
        blogImage.src = `../asset/image/blog${postId}.png`; 
        blogImage.alt = translations[currentLanguage][`blog_image_${postId}_alt`] || `Blog image ${postId}`;
        blogTitle.textContent = translations[currentLanguage][`blog_title_${postId}`] || post.title;
        blogIntro.textContent = translations[currentLanguage][`blog_excerpt_${postId}`] || post.body;
        blogAuthorDate.textContent = `Author - Date`; 
        blogReadMore.textContent = translations[currentLanguage]["read_more"] || "Read more";
        blogComments.textContent = translations[currentLanguage][`comments_count_${postId}`] || "Comments";
    }

    translatePage();
});
