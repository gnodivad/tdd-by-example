import { Money } from "./Money";
import { Bank } from "./Bank";
import { Sum } from "./Sum";

it('simple addition', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
});

it('plus return sum object', () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
});

it('reduce Sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
});

it('reduce Money', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
})

it('reduce Money different currency', () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
})

it('multiplication', () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10).equals(five.times(2))).toBe(true);
    expect(Money.dollar(15).equals(five.times(3))).toBe(true);
});

it('equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

it('currency', () => {
    expect(Money.dollar(1).getCurrency()).toEqual("USD");
    expect(Money.franc(1).getCurrency()).toEqual("CHF");
})