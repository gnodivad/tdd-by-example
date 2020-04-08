import { Money } from "./Money";
import { Expression } from "./Expression";

export class Sum implements Expression {
    public augend: Money;
    public addend: Money;

    constructor(augend: Money, addend: Money) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to: string): Money {
        const amount = this.augend.getAmount() + this.addend.getAmount();
        return new Money(amount, to);
    }
}