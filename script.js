let divContainer = document.createElement('div');
divContainer.classList.add('container');

let body = document.getElementsByTagName('body')[0]; //IMPORTANT TO ALWAYS ADS THE [0] BEFORE APPEND OTHER ELEMENTS, CHECK OUT THE REASONS 
body.append(divContainer);

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




const items = document.getElementsByClassName('grid-item');
// item.style.backgroundColor='yellow';
// item.nextSibling.style.backgroundColor = 'yellow';
let newColorItem = Array.from(items);

newColorItem.forEach(element => {
    element.addEventListener('mouseover',() => {
        element.style.backgroundColor = generateRandomColor();
    });

    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = generateRandomColor();
    }); 
    
});

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
// items.addEventListener('mouseover', () => {
//     items.style.backgroundColor = 'black';
// } )



// gridItem.forEach((item) => {
//    item.addEventListener('mouseover',(event) => {
//     event.style
//    } ) 
// })


// function changeColor() {
    // let div = document.getElementById('new-color');
    // div.style.backgroundColor = 'blue';
// }

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

// for (let i = 0; i === gridItem.length; i++) {
//     gridItem[i].addEventListener('mouseover', function(){
//         body.style.backgroundColor = 'black';
//         i++;
//     });
// } 