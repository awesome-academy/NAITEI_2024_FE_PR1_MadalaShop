  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }



  function showTabContent(event, tabId) {
    event.preventDefault();
    
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.add('hidden'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('ul li a');
    tabs.forEach(tab => tab.classList.remove('active', 'text-black', 'border-black'));
    tabs.forEach(tab => tab.classList.add('hover:text-gray-600', 'hover:border-gray-300'));

    // Show the selected tab content
    document.getElementById(tabId).classList.remove('hidden');

    // Add active class to the selected tab
    event.target.classList.add('active', 'text-black', 'border-black');
    event.target.classList.remove('hover:text-gray-600', 'hover:border-gray-300');
}
