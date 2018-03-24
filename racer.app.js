// const playerOne = document.getElementById('carOne');
// const playerTwo = document.getElementById('carTwo');

// let e;
// const moveAlong = (e) => {
//     playerOne.addEventListener("keydown", () => {
//         if (e.keyCode === 70){
//         carOne.setAttribute("style", "left: +=5"+ "px");
//         }
//     playerTwo.addEventListener("keydown", () => {
//         if (e.keyCode === 74){
//         carTwo.setAttribute("style", "left: +=5"+ "px");
//         }
       
// })
// })
// };

const button = document.getElementById('goButton');
const square = document.getElementById('carOne');

let pos = 200;

// const moveAlong = (e) => {
    document.addEventListener('keydown', () => {
        // if (e.keyCode === 70){
            pos += 10;
            square.style.left = pos + 'px';
        })
// }
// movealong(e);






// j key is 74
// f key is 70