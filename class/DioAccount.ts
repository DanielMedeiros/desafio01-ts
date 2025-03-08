export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {    
    this.balance += value;
    if(this.validateStatus()){
      console.log(`Você depositou ${value}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.balance < value){
      console.log('Saldo insuficiente')
      return
    }

    this.balance -= value
    console.log(`Você sacou ${value}, seu saldo atual é de ${this.balance}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
