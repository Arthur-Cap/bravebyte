const banner = document.querySelector(".body-page_banner");
console.log("sao không chạy z duma");
const images = [
    "/Img/2389914.webp",
    "/Img/god-of-war-ragnarök-3840x2160-8677.jpg",
    "/Img/red-dead-redemption-2-4k-3840x2160-11991.jpg",
    "/Img/HD-wallpaper-life-is-strange-remastered-2021.jpg"
];

let currentIndex = 0;

function changeBackground() {
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
    console.log(images[currentIndex]);
}
changeBackground();
setInterval(changeBackground, 2000);

