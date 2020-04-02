import { Franc } from "./Franc";
import { Money } from "./Money";

describe("Dollar", () => {
    it('multiplication', () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).equals(five.times(2))).toBe(true);
        expect(Money.dollar(15).equals(five.times(3))).toBe(true);
    });
})

describe("Franc", () => {
    it('multiplication', () => {
        const five = Money.franc(5);
        expect(Money.franc(10).equals(five.times(2))).toBe(true);
        expect(Money.franc(15).equals(five.times(3))).toBe(true);
    });
})

it('equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

it('currency', () => {
    expect(Money.dollar(1).getCurrency()).toEqual("USD");
    expect(Money.franc(1).getCurrency()).toEqual("CHF");
})