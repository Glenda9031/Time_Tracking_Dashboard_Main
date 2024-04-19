const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.link');

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        cards.forEach((card, index) => {
            const title = card.querySelector('.card-type');
            const current = card.querySelector('.current-hours');
            const previous = card.querySelector('.previous-hours');

            
        });
    });