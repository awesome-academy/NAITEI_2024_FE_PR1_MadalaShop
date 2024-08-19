fetch('trendingproduct.html')
.then(response => response.text())
.then(data => {
    document.getElementById('trendingproduct').innerHTML = data;
});
