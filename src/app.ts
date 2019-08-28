import { getRandomInt } from './random';
let squares: NodeList;

export function runApp() {
    // we need a random number 1 -6
    const secretNumber = getRandomInt(1, 6);
    // find all the squares. pick the one that is the secret number and "bless"
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach(function (square: HTMLDivElement) {
        if (currentSquare === secretNumber) {
            square.dataset.secret = 'true';
        }
        square.addEventListener('click', handleClick);
        currentSquare++;
    });
    // make it so that when the user clicks on the square, something happens
}

function handleClick() {
    const clickedSquare = this as HTMLDivElement;
    const isSpecialSquare = clickedSquare.dataset.secret === 'true';
    // clickedSquare.dataset.secret === 'true' ? clickedSquare.classList.add('winner') : clickedSquare.classList.add('loser');
    if (isSpecialSquare) {
        clickedSquare.classList.add('winner');
        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }
        });
    } else {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);
    }
}
