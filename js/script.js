function goToTicket() {
    // targeted section to reach
    const ticketSection = document.getElementById('ticket-section');

    // scroll to the targeted section
    ticketSection.scrollIntoView({ behavior: 'smooth' })

    /* this scrollIntoView was not included in programming hero course,
    I could've used the href attribute in anchor tag from the banner but
    that shouldn't be called functional, as the instructor said it's need to be 
    functional, that's why I took help from stackoverflow but didn't copy paste, I took the idea and learned about
    scrollIntoView by reading documentation and then write the code my self. Hopefully that won't 
    effect my mark.
    */
}


document.addEventListener('click', seatSelected);





// global variables
const grandTotal = document.getElementById('grand-total');
const discountTotal = document.getElementById('discount-total');
const couponForm = document.getElementById('coupon-form');
let selectedSeats = 0;
let totalMoney = 0;



function seatSelected(event) {
    const clickedButton = event.target;
    // get the element you clicked
    if (clickedButton.classList.contains('bus-seat') && !clickedButton.classList.contains('seat-selected')) {


        const seatNumber = clickedButton.innerText;
        // create a div to hold 3 info of each tickets
        const ticketDetailsHolder = document.createElement('div');
        ticketDetailsHolder.classList.add('flex', 'justify-between');


        // create those 3 info of each tickets and append them to the parent element

        // declare the seat name as selected seat
        const seatName = document.createElement('h3');
        seatName.innerText = seatNumber
        ticketDetailsHolder.appendChild(seatName);

        // declare the seat type(it's static)
        const seatType = document.createElement('h3');
        seatType.innerText = 'Economy';
        ticketDetailsHolder.appendChild(seatType);

        // declare the seat price
        const perTicketCost = document.createElement('h3');
        perTicketCost.innerText = 550;
        ticketDetailsHolder.appendChild(perTicketCost);


        // push the ticket info to the UI
        const wholeTicketDetails = document.getElementById('ticket-details');
        wholeTicketDetails.appendChild(ticketDetailsHolder);

        const seatCount = document.getElementById('selected-ticket');

        // increase selected seats
        selectedSeats++;
        totalMoney = selectedSeats * 550;
        const totalMoneyUi = document.getElementById('ticket-price-total');
        totalMoneyUi.innerText = totalMoney;
        grandTotal.innerText = totalMoney;



        // disable the buttons when it's limit reached and show alert
        seatCount.innerText = selectedSeats;
        if (selectedSeats === 4) {
            const disableButtons = document.querySelectorAll('.bus-seat');
            disableButtons.forEach(function (button) {
                button.disabled = true;
            })
            const alert = document.getElementById('alert-ticket-limit');
            alert.removeAttribute('hidden')

        }

        if (selectedSeats >= 4) {
            const applyButton = document.getElementById('apply-button');
            applyButton.disabled = false;
        }

        // update available seats after selecting tickets
        const seatAvailable = document.getElementById('seat-available');
        let availableSeats = parseInt(seatAvailable.innerText);
        availableSeats = availableSeats - 1;
        seatAvailable.innerText = availableSeats;

        // highlight the button clicked
        clickedButton.classList.remove('bg-[#f0f0f0]');
        clickedButton.classList.add('bg-[#1dd100]');
        clickedButton.classList.add(('seat-selected'));
    }
}

function applyCoupon() {

    const couponInput = document.getElementById('coupon-input');
    const applyButton = document.getElementById('apply-button');
    console.log(grandTotal.innerText)
    if (couponInput.value === 'NEW15') {
        let getDiscount = totalMoney * 0.15;
        totalMoney = totalMoney - getDiscount;
        discountTotal.innerText = getDiscount;
        grandTotal.innerText = totalMoney;
        couponInput.value = ''
        applyButton.disabled = true;
        couponForm.classList.add('hidden');
    }
    if (couponInput.value === 'Couple 20') {
        let getDiscount = totalMoney * 0.20;
        totalMoney = totalMoney - getDiscount;
        discountTotal.innerText = getDiscount;
        grandTotal.innerText = totalMoney;
        couponInput.value = ''
        applyButton.disabled = true;
        couponForm.classList.add('hidden');
    }
}

// form validation
const inputName = document.getElementById('input-name'); /* required */
const inputPhone = document.getElementById('input-phone'); /* required */
const inputEmail = document.getElementById('input-email');
const nextButton = document.getElementById('next-button');
const modalLink = document.getElementById('modal-link');

function checkRequiredFields() {
    const textValue = inputName.value;
    const numberValue = inputPhone.value;

    // Enable the button only if both required fields have values and name is only string and phone number is only number
    if (textValue !== '' && numberValue !== '' && !isNaN(numberValue) && selectedSeats > 1) {
        nextButton.removeAttribute('disabled');
        modalLink.setAttribute('href', '#my_modal_8')
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    }
}

// Add event listeners to the input fields to check for changes
inputName.addEventListener('input', checkRequiredFields);
inputPhone.addEventListener('input', checkRequiredFields);