import { Money } from "./Money";

export class Dollar extends Money {
    constructor(amount: number) {
        super(amount);
        this.amount = amount;
    }

    times(multiplier: number): Money {
        return new Dollar(this.amount * multiplier);
    }
}