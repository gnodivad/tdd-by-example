export class Dollar {
    amount: number = 0;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    equals(object: Object): boolean {
        const dollar = object as Dollar;
        return this.amount == dollar.amount;
    }
}