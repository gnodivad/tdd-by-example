import { Dollar } from "./Dollar";
import { Franc } from "./Franc";

describe("Dollar", () => {
    it('multiplication', () => {
        const five = new Dollar(5);
        expect(new Dollar(10).equals(five.times(2))).toBe(true);
        expect(new Dollar(15).equals(five.times(3))).toBe(true);
    });
})

describe("Franc", () => {
    it('multiplication', () => {
        const five = new Franc(5);
        expect(new Franc(10).equals(five.times(2))).toBe(true);
        expect(new Franc(15).equals(five.times(3))).toBe(true);
    });
})

it('equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(new Franc(5).equals(new Dollar(5))).toBe(false);
});