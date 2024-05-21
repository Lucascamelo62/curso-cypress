/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
})

describe('Acessando uma página', () => {
    it('Acessando URL aquino e encontrando title', () => {
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contains', 'Campo')
    })

    it('Interagindo com o botão', () => {
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})

describe('Interagindo com elementos da tela', () => {
    it('Buscando elemento', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get(':nth-child(4) > :nth-child(1) > label').should('have.text', 'Qual\n\t\t\t\t\t\t\t\tsua comida favorita?');
    })
})

describe('Interagindo com inputs de texto', () => {
    it('Encontrando elemento nome', () => {
        cy.get('#formNome')
        .type('Teste')
        .should('have.value', 'Teste')
    })

    it('Encontrando elemento sugestão', () => {
        cy.get('#elementosForm\\:sugestoes')
        .type('Lucas Silva Camelo{backspace}')
        .should('have.value', 'Lucas Silva Camel');
    })

    it('Encontrando elemento input', () => {
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('OIOIOI{selectall}TCHAU');
    })
})

describe('Encontrando elementos RadioButton', () => {
    it('RadioButton', () => {
        cy.get('[name=formSexo]').should('have.length', 2)

        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')

        cy.get('#formSexoFem').should('not.be.checked')
    })
})

describe('Interagindo com checkbox', () => {
    it('Marcando multiplos checkbox', () => {
        cy.get('[name=formComidaFavorita]').click({multiple:true})
    })
})

describe('Interagidno com combo dropdown', () => {
    it('Selecionando um elemento de um dropdown', () => {
        cy.get('[name=formEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomps')
    })
})