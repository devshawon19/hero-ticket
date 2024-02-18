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

