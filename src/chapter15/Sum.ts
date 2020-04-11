import { Money } from "./Money";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Sum implements Expression {
    public augend: Expression;
    public addend: Expression;

    constructor(augend: Expression, addend: Expression) {
        this.augend = augend;
        this.addend = addend;
    }

    plus(addend: Expression): Expression {
        throw new Error("Method not implemented.");
    }

    reduce(bank: Bank, to: string): Money {
        const amount = this.augend.reduce(bank, to).getAmount() + this.addend.reduce(bank, to).getAmount();
        return new Money(amount, to);
    }
}