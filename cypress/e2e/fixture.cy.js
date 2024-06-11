/// <reference types="Cypress" />
import userData from '../fixtures/userData.json'

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Utilizando preenchimento do form por Fixture', () => {
    it('Fixture - userData', function () {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('[data-cy="dataSobrenome"]').type(this.usuario.sobrenome)
            cy.get('#formSexoMasc').click()
        })
    })
})