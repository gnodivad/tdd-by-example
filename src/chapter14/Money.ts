import { Expression } from "./Expression";
import { Sum } from "./Sum";
import { Bank } from "./Bank";

export class Money implements Expression {
    protected amount: number = 0;
    protected currency: string = "";

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    getCurrency(): string {
        return this.currency;
    }

    getAmount(): number {
        return this.amount;
    }

    static dollar(number: number): Money {
        return new Money(number, "USD");
    }

    static franc(number: number): Money {
        return new Money(number, "CHF");
    }

    equals(object: Object | null): boolean {
        if (!object) {
            return false;
        }

        const money = object as Money;
        return this.amount == money.amount && this.getCurrency() == money.getCurrency();
    }

    plus(addend: Money): Expression {
        return new Sum(this, addend);
    }

    times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.getCurrency());
    }

    reduce(bank: Bank, to: string) {
        const rate = bank.rate(this.currency, to);

        return new Money(this.amount / rate, to);
    }
}