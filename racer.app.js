const square = document.getElementById('carOne');
const square2 = document.getElementById('carTwo');


let pos = 200;

// const moveAlong = (e) => {
    document.addEventListener('keydown', (e) => {
        if (70 === e.keyCode && pos < 1100){
            pos += 100;
            square.style.left = pos + 'px';
        }
        else {
            if (70 === e.keyCode && pos === 1100){
                square.style.left = 1100 + 'px';
                alert('Player1 wins!');
            }
        }
});
    document.addEventListener('keydown', (e) => {
        if (74 === e.keyCode && pos < 1100){
            pos += 100;
            square2.style.left = pos + 'px';
        }
        else {
            if (74 === e.keyCode && pos === 1100){
                square2.style.left = 1100 + 'px';
                alert('Player2 wins!');
        }
    }
});
// moveAlong(e);






// j key is 74
// f key is 70


// const button = document.getElementById('goButton');






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