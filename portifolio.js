let time = 2000
let currentIndex = 0
let images = document.querySelectorAll("#slider img")
let max = images.length

function nextImage() {
    
    images[currentIndex].classList.remove("selected")
    
    currentIndex++
    
    if (currentIndex >= max) {
        currentIndex = 0
    }
    
    images[currentIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time);
}

window.onload = () => {
    start()
}