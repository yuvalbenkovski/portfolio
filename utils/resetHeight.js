function resetHeight() {
    document.body.style.height = window.innerHeight + "px";
    document.getElementById('background-image').style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);
resetHeight();