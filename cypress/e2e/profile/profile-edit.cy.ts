let profileId = '';

describe('Foydalanuvchi profil sahifasiga tashrif buyuradi', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Va profil muvaffaqiyatli yuklandi', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('Va tahrir qiladi', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});
