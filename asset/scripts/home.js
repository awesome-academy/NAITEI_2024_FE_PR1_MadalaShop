fetch('home.html')
.then(response => response.text())
.then(data => {
    document.getElementById('home').innerHTML = data;
    const newStyleSheet = document.createElement("link");
                newStyleSheet.rel = 'stylesheet';
                newStyleSheet.href = '../css/home.css';
                document.head.appendChild(newStyleSheet);
});
