/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Testando alert', () => {
    it('Verificando exibição do alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Alert Simples')
        })
    })

    it('Utilizando stub', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
})