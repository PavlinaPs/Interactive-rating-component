const numbers = document.querySelectorAll(".numbers");
const numberSelected = document.getElementById('selected-number')
const ratingDisplay = document.getElementById('rating')
const thankYouDisplay = document.getElementById('thank-you')

function selectRating(){
    let numberId
    numbers.forEach(number => number.addEventListener('click', (e) => {
        numbers.forEach(item => item.setAttribute('aria-selected', 'false'))
        numberId = e.target.id;
        number.setAttribute('aria-selected', 'true');
        numberSelected.innerText = numberId;
    }));
    
}
selectRating();


const submit = document.getElementById('submit');
submit.addEventListener('click', displayThankYou)


function displayThankYou() {
    
    ratingDisplay.setAttribute('aria-hidden', 'true')
    thankYouDisplay.setAttribute('aria-hidden', 'false')
}


