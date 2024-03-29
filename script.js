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
        // Hide all cards
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
  
        // Show the specified cards
        cardIds.forEach(cardId => {
            const card = document.getElementById(cardId);
            if (card) {
                card.style.display = 'block';
            }
        });
    }
  
    function expandCard(clickedItem) {
      clickedItem.classList.toggle('active');
        // Hide all cards
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
  
        // Show the clicked card
        const clickedCard = document.getElementById(cardId);
        if (clickedCard) {
            clickedCard.style.display = 'block';
        }
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