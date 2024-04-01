function toggleNavbar() {
    var navbar2List = document.querySelector(".navbar2-list");
    var additionalContentContainer = document.getElementById("navbar2-small-sub");

    if (additionalContentContainer.classList.contains("show")) {
        additionalContentContainer.classList.remove("show");
    } else {
        additionalContentContainer.classList.add("show");
        additionalContentContainer.innerHTML = navbar2List.innerHTML; // Populate with navbar2-list content
    }
}

function navigateToCard(cardNumber, showAll = false) {
    // Remove the 'active' class from all round buttons
    document.querySelectorAll('.round-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked round button
    document.querySelector(`.round-button:nth-child(${cardNumber})`).classList.add('active');

    // Hide all cards initially
    document.querySelectorAll('.container3-1 .compliance-desk-card').forEach(card => {
        card.style.display = 'none';
    });

    // Show the specified card(s)
    if (showAll) {
        document.querySelectorAll('.container3-1 .compliance-desk-card').forEach(card => {
            card.style.display = 'flex';
        });
    } else {
        document.querySelector(`.container3-1 .card:nth-child(${cardNumber})`).style.display = 'flex';
    }
}

// Call navigateToCard with an initial card number to show a default card
navigateToCard(1);

// Add click event listeners to the round buttons
document.querySelectorAll('.round-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        navigateToCard(index + 1, index < 4); // Show all cards if the index is less than 4
    });
});




function changeColor(clickedItem) {
    // Remove the "active" class from other items
    document.querySelectorAll('.clickable').forEach(item => {
        if (item !== clickedItem) {
            item.classList.remove('active');
        }
    });

    // Toggle the "active" class on the clicked item
    clickedItem.classList.toggle('active');
}

function highlightCard(clickedItem, cardId) {
    // Remove the "active" class from other items
    document.querySelectorAll('.registration-button, .item').forEach(item => {
        if (item !== clickedItem) {
            item.classList.remove('active');
        }
    });

    // Toggle the "active" class on the clicked item
    clickedItem.classList.toggle('active');

    // Toggle the "active" class on the clicked card
    const clickedCard = document.getElementById(cardId);
    if (clickedCard) {
        clickedCard.classList.toggle('active');

        // Remove the "active" class from other cards
        document.querySelectorAll('.card').forEach(card => {
            if (card !== clickedCard) {
                card.classList.remove('active');
            }
        });
    }
}

function expandCards(cardIds, clickedItem) {
    clickedItem.classList.toggle('active');
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });

    cardIds.forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) {
            card.style.display = 'block';
        }
    });
}

function expandCard(cardId, clickedItem) {
    clickedItem.classList.toggle('active');
    // Hide all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });

    // Show the clicked card
    const clickedCard = document.getElementById(1);
    if (clickedCard) {
        clickedCard.style.display = 'block';
    } else {
        clickedCard.style.display = 'block';
    }
}


let currentIndex = 0;
const itemsPerSlide = 1;

function prevCard() {
  currentIndex = Math.max(currentIndex - itemsPerSlide, 0);
  updateCarousel();
}

function nextCard() {
  const totalItems = document.querySelectorAll('.carousel-wrapper .cardss').length;
  currentIndex = Math.min(currentIndex + itemsPerSlide, totalItems - itemsPerSlide);
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * (300 + 15); // Adjust based on your card width and margin
  document.getElementById('cardCarousel').style.transform = `translateX(${translateValue}px)`;
}
const cardsContainer = document.querySelector('.cards-container');
const dots = document.querySelectorAll('.dot');
let currenTIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showCard(index);
  });
});

function showCard(index) {
  document.querySelectorAll('.about-card').forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currenTIndex = index;
}


function toggleAnswer(button) {
    console.log('toggleAnswer function called');
    // Get the parent container of the FAQ item
    const faqItem = button.closest('.faq-item');

    // Toggle the visibility of the answer paragraph
    const answer = faqItem.querySelector('.faq-answer');
    if (answer) {
        answer.classList.toggle('active');
    }

    // Toggle the icon of the button (+ or -)
    button.textContent = button.textContent === '+' ? '-' : '+';
}
