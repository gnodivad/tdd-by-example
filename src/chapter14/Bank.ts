import { Expression } from "./Expression";
import { Pair } from "./Pair";

export class Bank {
    private rates: Map<string, number> = new Map<string, number>();

    addRate(from: string, to: string, rate: number) {
        this.rates.set(JSON.stringify(new Pair(from, to)), rate);
    }

    rate(from: string, to: string): number {
        const rate = this.rates.get(JSON.stringify(new Pair(from, to)));

        console.log(rate);

        return rate ?? 1;
    }

    reduce(source: Expression, to: string) {
        return source.reduce(this, to);
    }
}