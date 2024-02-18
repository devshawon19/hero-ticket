function goToTicket(){
    // targeted section to reach
    const ticketSection = document.getElementById('ticket-section');

    // scroll to the targeted section
    ticketSection.scrollIntoView({behavior: 'smooth'})

    /* this scrollIntoView was not included in programming hero course,
    I could've used the href attribute in anchor tag from the banner but
    that shouldn't be called functional, as the instructor said it's need to be 
    functional, that's why I took help from stackoverflow but didn't copy paste, I took the idea and learned about
    scrollIntoView by reading documentation and then write the code my self. Hopefully that won't 
    effect my mark.
    */
}

document.addEventListener('click', seatSelected);

function seatSelected(event){
    const clickedButton = event.target;
    // get the element you clicked
    if(clickedButton.classList.contains('bus-seat') && !clickedButton.classList.contains('seat-selected') ) {
        const seatNumber = clickedButton.innerText;
        // create a div to hold 3 info of each tickets
        const  ticketDetailsHolder = document.createElement('div');
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
        


        // highlight the button clicked
        clickedButton.classList.remove('bg-[#f0f0f0]');
        clickedButton.classList.add('bg-[#1dd100]');
        clickedButton.classList.add(('seat-selected'));
    }
}


