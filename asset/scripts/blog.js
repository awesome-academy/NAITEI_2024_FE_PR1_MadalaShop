document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');

    const posts = [
        {
            id: 1,
            titleKey: "blog_title_1",
            bodyKey: "blog_excerpt_1",
            image: '../asset/image/blog1.png',
            altKey: "blog_image_1_alt",
            commentsKey: "comments_count_1"
        },
        {
            id: 2,
            titleKey: "blog_title_2",
            bodyKey: "blog_excerpt_2",
            image: '../asset/image/blog2.png',
            altKey: "blog_image_2_alt",
            commentsKey: "comments_count_2"
        },
        {
            id: 3,
            titleKey: "blog_title_3",
            bodyKey: "blog_excerpt_3",
            image: '../asset/image/blog3.png',
            altKey: "blog_image_3_alt",
            commentsKey: "comments_count_3"
        },
        {
            id: 4,
            titleKey: "blog_title_4",
            bodyKey: "blog_excerpt_4",
            image: '../asset/image/blog4.png',
            altKey: "blog_image_4_alt",
            commentsKey: "comments_count_4"
        },
        {
            id: 5,
            titleKey: "blog_title_5",
            bodyKey: "blog_excerpt_5",
            image: '../asset/image/blog5.png',
            altKey: "blog_image_5_alt",
            commentsKey: "comments_count_5"
        },
        {
            id: 6,
            titleKey: "blog_title_6",
            bodyKey: "blog_excerpt_6",
            image: '../asset/image/blog6.png',
            altKey: "blog_image_6_alt",
            commentsKey: "comments_count_6"
        },
    ];

    localStorage.setItem('posts', JSON.stringify(posts));

    function displayPosts(posts) {
        blogList.innerHTML = ''; // Xóa nội dung cũ nếu có
        posts.forEach(post => {
            const postHtml = `
                <div class="bg-white rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
                    <img src="${post.image}" class="w-full" data-i18n-alt="${post.altKey}">
                    <div class="p-4">
                        <a href="blog_detail.html?post_id=${post.id}" class="block hover:underline">
                            <h2 class="font-bold text-xl mb-2" data-i18n="${post.titleKey}">${translations[currentLanguage][post.titleKey]}</h2>
                        </a>
                        <hr class="mb-4 border-gray-200">
                        <p class="text-gray-700 text-base" data-i18n="${post.bodyKey}">${translations[currentLanguage][post.bodyKey]}</p>
                        <hr class="my-4 border-gray-200">
                        <div class="flex justify-between text-gray-400 hover:text-black">
                            <a href="blog_detail.html?post_id=${post.id}" class="hover:text-black" data-i18n="read_more"></a>
                            <span data-i18n="${post.commentsKey}">${translations[currentLanguage][post.commentsKey]}</span>
                        </div>
                    </div>
                </div>
            `;
            blogList.innerHTML += postHtml;
        });

        translatePage(); 
    }

    displayPosts(posts);
});
