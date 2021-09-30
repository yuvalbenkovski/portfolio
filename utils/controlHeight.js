const actualHeight = window.innerHeight;
const elementHeight = document.getElementById('control-height').clientHeight;

const barHeight = elementHeight - actualHeight;
document.getElementById('index').style.height -= barHeight
document.getElementById('background-image').style.height -= barHeight