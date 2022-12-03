describe('review game list', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a list of games', () => {
    cy.contains('Board Game Hoard: Review');

    cy.contains('a', 'Settlers in the Can').within(() => {
      cy.contains('/5');
      cy.contains('$35.00');
    });
    cy.contains('a', 'Chess Pie').within(() => {
      cy.contains('/5');
      cy.contains('$15.00');
    });
    cy.contains('a', 'Purrfection').within(() => {
      cy.contains('/5');
      cy.contains('$45.00');
    });
  });

  it('should navigate to game review details', () => {
    cy.contains('a', 'Settlers in the Can').click();
    cy.url().should('contain', 'review/settlers-in-the-can');
  });
});

describe('game review details', () => {
  beforeEach(() => cy.visit('/review/settlers-in-the-can'));

  it('should list reviews', () => {
    cy.contains('Settlers in the Can');
    cy.contains('Help your bug family');
    // Dummy text for reviews
    cy.contains('Lorem ipsum');
  });

  it('should have a form to add a review', () => {
    const reviewText = 'This is a new review at ' + new Date().getTime();
    cy.contains('label', 'Rating')
      .find('input')
      .type('3');
    cy.contains('label', 'Review')
      .find('textarea')
      .type(reviewText);
    cy.contains('button', 'Submit Review').click();

    cy.contains('label', 'Rating')
      .find('input')
      .should('have.value', '0');
    cy.contains('label', 'Review')
      .find('textarea')
      .should('have.value', '');

    cy.contains(reviewText);
  });
});
