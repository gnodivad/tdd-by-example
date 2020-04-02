export abstract class Money {
    protected amount: number = 0;
    protected currency: String = "";
    abstract times(multiplier: number): Money;

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(object: Object): boolean {
        const money = object as Money;
        return this.amount == money.amount && this.constructor.name == object.constructor.name;
    }

    getCurrency(): String {
        return this.currency;
    }

    static dollar(number: number): Money {
        return new Dollar(number, "USD");
    }

    static franc(number: number): Money {
        return new Franc(number, "CHF");
    }
}

import { Dollar } from "./Dollar";
import { Franc } from "./Franc";