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

// const button = document.getElementById('goButton');
const square = document.getElementById('carOne');
//  DONT KNOW WHAT THIS DOES YET let pos = 0;


// let e;
// const moveAlong = (e) => {
    goButton.addEventListener("click", () => {
        square.style.left += 50 + 'px';
        //  NOT WORKING: square.setAttribute("style", "left += 500 + 'px'");
        // square.setAttribute("style", "background-color: yellow");
    })
// }







// j key is 74
// f key is 70