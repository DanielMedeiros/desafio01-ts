import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { NewAccount } from "./class/NewAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(50);
peopleAccount.withdraw(10);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.getLoan(100);

const account: NewAccount = new NewAccount("João", 123456);
account.deposit(100);
