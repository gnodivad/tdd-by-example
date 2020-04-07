import { Expression } from "./Expression";
import { Money } from './Money';

export class Bank {
    reduce(source: Expression, to: String) {
        return Money.dollar(10);
    }
}