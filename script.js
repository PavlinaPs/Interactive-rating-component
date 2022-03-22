const numbers = document.querySelectorAll(".numbers");
const numberSelected = document.getElementById('selected-number');
const ratingDisplay = document.getElementById('rating');
const thankYouDisplay = document.getElementById('thank-you');
const submit = document.getElementById('submit');
let choice = [];

function selectRating(){
    let numberId;
    numbers.forEach(number => number.addEventListener('click', (e) => {
        numbers.forEach(item => item.setAttribute('aria-selected', 'false'));
        numberId = e.target.id;
        number.setAttribute('aria-selected', 'true');
        choice.push(numberId);
        numberSelected.innerText = numberId;
    }));
}
selectRating();

function submitChoice() {
    submit.addEventListener('click', () => {
        if (choice.length === 0) {
            alert('Please choose rating');
        } else {
            displayThankYou();
        }
    })
}
submitChoice();

function displayThankYou() {
    ratingDisplay.setAttribute('aria-hidden', 'true');
    thankYouDisplay.setAttribute('aria-hidden', 'false');
}


