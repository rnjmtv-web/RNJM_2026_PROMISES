const totalImages = 30;

const randomNumber = Math.floor(Math.random() * totalImages) + 1;
const imagePath = `images/${randomNumber}.png`;

document.getElementById("randomImage").src = imagePath;
