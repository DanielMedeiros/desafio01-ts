import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    amount += 10;
    this.deposit(amount);
  };
}
