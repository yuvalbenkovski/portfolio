function resetHeight() {
    document.getElementById('index').style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);
resetHeight();