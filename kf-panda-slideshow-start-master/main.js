// Kung Fu Panda Slideshow / Gallery

// Global Variable
let imgPaths = ["po.png", "tigress.png", "viper.png", "monkey.png", "crane.png", "mantis.png", "po.png", "tigress.png"];

// Create image gallery
let imgContainerEl = document.getElementById("img-container")
for (let i = 0; i < imgPaths.length; i++) {
    imgContainerEl.innerHTML += "<img src='images/" + imgPaths[i] + "'>"
}
