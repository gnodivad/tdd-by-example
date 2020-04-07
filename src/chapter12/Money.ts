import { Expression } from "./Expression";

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
        return new Money(this.amount + addend.amount, this.currency);
    }

    times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.getCurrency());
    }
}