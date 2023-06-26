class Account {
  accountNumber: string;
  owner: string;
  balance: number;
  constructor(accountNumber: string, owner: string){
    this.accountNumber = accountNumber
    this.owner = owner
    this.balance = 0
  }
  deposit(money: number){
    this.balance += money
  }
  withdraw(money: number){
    this.balance -= money
  }
  getAccountNumber(): string{
    return this.accountNumber
  }
  getBalance(): number{
    return this.balance
  }

}

const account = new Account("1234567891234", "hanho");
// 3만원 입금
account.deposit(30000);
// 1만원 인출
account.withdraw(10000);
// 계좌번호 조회하기
console.log(`계좌번호 : ${account.getAccountNumber()}`);
// 잔액 조회하기
console.log(`잔액 : ${account.getBalance()}`);