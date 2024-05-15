/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
})

describe.skip('Acessando uma página', () => {
    it('Acessando URL aquino e encontrando title', () => {
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contains', 'Campo');
    })

    it('Interagindo com o botão', () => {
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!');
    })
})

describe('Interagindo com elementos da tela', () => {
    it('Buscando elemento', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get(':nth-child(4) > :nth-child(1) > label').should('have.text', 'Qual\n\t\t\t\t\t\t\t\tsua comida favorita?');
    })
})