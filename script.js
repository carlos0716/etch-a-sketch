// let btnReset = document.createElement('button');
// btnReset.classList.add('btn', 'btn-reset');
// btnReset.textContent = "reset";

let divContainer = document.createElement('div');
divContainer.classList.add('container');
divContainer.setAttribute('id','container');

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

// createGrid();



function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function generateGrid() {
    let rows= Number(prompt('Enter number of rows and columns'));
    let columns = rows //Number(prompt('Enter number of columns'));
    let numberOfDivs = rows * columns;
    
    
    if (rows === '') {
        alert('Enter a number between 1 and 100');
    }
    
    if (rows < 1 ) {
        alert('Enter a number between 1 and 100');
    }
    if(rows > 100) {
        alert('Error, the number of rows has to be equal or lesser than 100');
    }
    if (columns > 100) {
        alert('Error, the number of columns has to be equal or lesser than 100');
    }
    function makeDiv() {
       let div = document.createElement('div');
       div.classList.add('grid-item');
       divContainer.append(div);
       
    }   
    function makeGrid() {
        let i = 0;
        while(i !== numberOfDivs) {
            makeDiv();
            i++;
        }
        divContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // USE BACKTIKS IN ORDER TO MAKE THE REPEAT PROPERTY WITH THE DESIRED VALUE
        divContainer.style.gridTemplateRows = ` repeat(${rows}, 1fr)`;
        
    }
        makeGrid();
}

    let btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
    generateGrid();
    const items = document.getElementsByClassName('grid-item');
    let newColorItem = Array.from(items);

    // newColorItem.forEach(element => {
    // element.addEventListener('mouseover',() => {
    //     element.style.backgroundColor = 'black';
    // });

    // element.addEventListener('mouseleave', () => {
    //     element.style.backgroundColor = 'white';
    // }); 
    
});
// })
let btnBlack = document.querySelector('.btn-black');
btnBlack.addEventListener('click', () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        })
    });
})

let btnRnbw = document.querySelector('.btn-rainbow');
btnRnbw.addEventListener('click', () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(element => {
        element.addEventListener('mouseover',() => {
            element.style.backgroundColor = generateRandomColor();
        });
});

});

let btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(element => {
        element.style.backgroundColor = 'white';
    });
})