let divContainer = document.createElement('div');
divContainer.classList.add('container');


let body = document.getElementsByTagName('body')[0]; //IMPORTANT TO ALWAYS ADS THE [0] BEFORE APPEND OTHER ELEMENTS, CHECK OUT THE REASONS 
body.append(divContainer);

// 

let createDiv = function () {
   
    let div = document.createElement('div');
    div.classList.add('grid-item');
    divContainer.append(div);

} 

let createGrid = function() {
    let i = 0;
    while (i !== 256) {
        createDiv();
        i++;
    }
}

createGrid();
// ***********************************************

// const divElements = new Array(256);
// function createGrid() {
    
    
//     divElements.forEach(divElement) => {
//         let div = document.createElement('div');

//     };

// }

// const divArray = new Array(256);

// function test(){
// for(let i = 0; i===256; i++){
//     let a = console.log(i);
    
//     i++;
//     return console.log(a);
// }
// }