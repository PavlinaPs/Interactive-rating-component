const numbers = document.querySelectorAll(".numbers");
const numberSelected = document.getElementById('selected-number')
const ratingDisplay = document.getElementById('rating')
const thankYouDisplay = document.getElementById('thank-you')

let numberId

numbers.forEach(number => number.addEventListener('click', (e) => {
    numbers.forEach(item => item.setAttribute('aria-selected', 'false'))
    numberId = e.target.id;
    number.setAttribute('aria-selected', 'true');
    numberSelected.innerText = numberId;
    //console.log(numberSelected)
}));

const submit = document.getElementById('submit');
submit.addEventListener('click', displayThankYou)

function displayThankYou() {
    numbers.forEach(number => number.setAttribute('aria-selected', 'false'));
    ratingDisplay.setAttribute('data-visible', 'false')
    thankYouDisplay.setAttribute('data-visible', 'true')
}
