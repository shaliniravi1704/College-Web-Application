const morecolors=["red", "blue","green","yellow","purple"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click", function () {
    const random = getRandomNumber();
    console.log(random);

document.body.style.backgroundColor=morecolors[random];
color.textContent=morecolors[random];
});

function getRandomNumber() {
    return Math.floor(Math.random() * morecolors.length);
}
