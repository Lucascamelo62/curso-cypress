/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
})

describe('Acessando uma página', () => {
    it('Acessando URL aquino e encontrando title', () => {
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contains', 'Campo');
    })

    it('Interagindo com o botão', () => {
        cy.get('#buttonSimple').click();
        cy.get('#buttonSimple').should('have.value', 'Obrigado!');
    })
})