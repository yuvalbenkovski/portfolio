function resetHeight() {
    document.getElementById('background-image').style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);
resetHeight();