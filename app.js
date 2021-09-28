const board = document.getElementById('board');
const SQUARES_NUMBER = 700;
const colors = ['#B53471', 'pink', 'grey', '#7bed9f', 'white', '#f5a3ba', '#70a1ff', '#eccc68', '#9980FA', '#FDA7DF', '#A3CB38']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

setTimeout(() => document.querySelector('.modal').classList.remove('hide'), 10000);

setTimeout(() => document.querySelector('.modal').classList.remove('hide'), 30000);

setTimeout(() => document.querySelector('.modal').classList.remove('hide'), 60000);

const btn = document.getElementById('aaa');

btn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('hide')
})

