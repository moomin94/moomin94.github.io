const image = ["0.jpg", "1.jpg"];

const bgImg = document.createElement("img");
const chosenImg = image[Math.floor(Math.random() * image.length)];
bgImg.src = `image/${chosenImg}`;
document.body.appendChild(bgImg);
