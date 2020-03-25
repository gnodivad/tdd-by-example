import { Dollar } from "./Dollar";

describe("Dollar", () => {
    it('multiplication', () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.amount).toEqual(10);
    })
})