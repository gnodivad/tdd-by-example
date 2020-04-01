export abstract class Money {
    protected amount: number = 0;
    abstract times(multiplier: number): Money;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(object: Object): boolean {
        const money = object as Money;
        return this.amount == money.amount && this.constructor.name == object.constructor.name;
    }

    static dollar(number: number): Money {
        return new Dollar(number);
    }

    static franc(number: number): Money {
        return new Franc(number);
    }
}

import { Dollar } from "./Dollar";
import { Franc } from "./Franc";