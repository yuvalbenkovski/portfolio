const actualHeight = window.innerHeight;
const elementHeight = document.getElementById('control-height').clientHeight;
const barHeight = elementHeight - actualHeight;
const index = document.getElementById('index')
const bgImage = document.getElementById('background-image')
index.style.height = index.clientHeight - barHeight
bgImage.style.height = bgImage.clientHeight - barHeight