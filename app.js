const slider = document.querySelector('.circular-slider');
const image = document.querySelector('.slider .img');
const indicator = document.querySelector('.indicator');
const menuItems = document.querySelectorAll('.menu span');
const descriptions = document.querySelectorAll('.text');

const rotationValues = [-58, -32, 0, 32, 58];
const colors = [
    "radial-gradient (#a74255, #440412)",
    "radial-gradient(#ff4b5f, #a40b16)",
    "radial-gradient(#fdb76d, #f08a00)",
    "radial-gradient (#849ade, #42395f)",
    "radial-gradient (#e7ad59, #883e2a)",
];

const images = ["img1", "img2", "img3", "img4", "img5"];
let itemIndex = 2;

function rotate(rotationValue) {
    image.style.transform = `rotate(${rotationValue}deg)`;
    indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
}

menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener("click", () => {
        image.style.backgroundImage = `url(image/${images[i]}.png)`;
        slider.style.background = colors[i];

        if (i > itemIndex) {
            rotate(rotationValues[itemIndex] - 10);
        } else if (i < itemIndex) {
            rotate(rotationValues[itemIndex] + 10);
        } else {
            return "";
        }

        setTimeout(() => {
            rotate(rotationValues[i]);
        }, 10);

        descriptions.forEach(text => {
            text.style.display = "none";
        });
        descriptions[i].style.display = "block";
        itemIndex = i;
    });
});
