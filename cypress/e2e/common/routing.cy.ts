import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('Foydalanuvchi ruxsat etilmagan', () => {
    it("Bosh sahifaga o'tish", () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it("O'tish Profil sahifasini ochadi", () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it("O'tish mavjud bo'lmagan marshrutni ochadi", () => {
      cy.visit('/vjvjvjvj');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('Foydalanuvchi vakolatli', () => {
    beforeEach(() => {
      cy.login();
    });

    it("O'tish Profil sahifasini ochadi", () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it("O'tish maqolalar ro'yxati sahifasini ochadi", () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
