function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
