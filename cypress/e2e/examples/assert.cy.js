/// <reference types="cypress" />

describe('Assertivas', () => {
    it('Assertiva 1', () => {
        const a = 1;

        expect(a).equals(1);
        expect(a, 'Deverá ser igual a 1').to.be.equal(2);
    })

    it('Verdadeiro', () => {
        const a = true;

        expect(a).to.be.true;
    })

    it('Testando objeto', () => {
        const obj = {
            a: 1,
            b:2
        }

        expect(obj).to.be.equals(obj);
        expect(obj).to.be.deep.equals({a: 1, b:2});
        expect(obj).include({a: 1});
    })

    it('Array', () => {
        const arr = [1,2,3];

        expect(arr).to.be.members([1,2,3]);
        expect(arr).include.members([1]);
        expect(arr, 'Não deverá está vazio').to.be.not.empty;
    })
})