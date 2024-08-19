document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post_id');
    const blogImage = document.getElementById('blogImage');
    const blogTitle = document.querySelector('[data-i18n="blog_heading_detail"]');
    const blogIntro = document.querySelector('[data-i18n="blog_intro"]');
    const blogAuthorDate = document.querySelector('[data-i18n="blog_author_date"]');
    const blogReadMore = document.querySelector('[data-i18n="blog_read_more"]');
    const blogComments = document.querySelector('[data-i18n="blog_comments"]');
    const commentForm = document.querySelector('form');
    const nameField = document.querySelector('[data-i18n-placeholder="form_name"]');
    const emailField = document.querySelector('[data-i18n-placeholder="form_email"]');
    const commentField = document.querySelector('[data-i18n-placeholder="form_comment"]');

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        nameField.value = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        emailField.value = loggedInUser.email;
    }

    // Luu form data vao local storage
    nameField.addEventListener('input', () => localStorage.setItem('blogFormName', nameField.value));
    emailField.addEventListener('input', () => localStorage.setItem('blogFormEmail', emailField.value));
    commentField.addEventListener('input', () => localStorage.setItem('blogFormComment', commentField.value));

    // Pre-fill neu co trong local storage
    if (localStorage.getItem('blogFormName')) {
        nameField.value = localStorage.getItem('blogFormName');
    }
    if (localStorage.getItem('blogFormEmail')) {
        emailField.value = localStorage.getItem('blogFormEmail');
    }
    if (localStorage.getItem('blogFormComment')) {
        commentField.value = localStorage.getItem('blogFormComment');
    }

    //Submit form 
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const comment = commentField.value.trim();

        if (comment) {
            // Save lai
            console.log('Comment submitted:', comment);

            // Submit xong xoa value 
            commentField.value = '';

            // Xoa khoi local storage
            localStorage.removeItem('blogFormComment');

            alert('Your comment has been submitted!');
        } else {
            alert('Please enter a comment before submitting.');
        }
    });

    // Fetch data cua blog post
    let post = JSON.parse(localStorage.getItem(`post_${postId}`));

    if (!post) {
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        try {
            const response = await fetch(apiUrl);
            post = await response.json();

            // Luu vao localstorage
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
