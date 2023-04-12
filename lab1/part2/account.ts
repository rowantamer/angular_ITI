// class account
class account {
    // private Acc_no: number;
    // private Balance: number;
    constructor(public Acc_no :number, public Balance:number) {}

    debitAmount() {
        // debit amount
        return this.Balance*0.1;
    }
    creditAmount() {
        // credit amount
        return this.Acc_no;
    }
    getBalance() {
        // get balance
        return this.Balance;
    }
}

//interface Account

interface IAccount {
    DateOfOpening: Date;
    addCustomer();
    removeCustomer();
}


class savingAccount extends account implements IAccount  {
    constructor( Acc_no :number,  Balance:number ,public DateOfOpening: Date ,public MinBalance:number) {
        super(Acc_no,Balance);
    }
    addCustomer() {
        // add customer
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // remove customer
        throw new Error("Method not implemented.");
    }
}


class currentAccount extends account implements IAccount{
    constructor( Acc_no :number,  Balance:number , public DateOfOpening: Date, public interestRate:number) {
        super(Acc_no,Balance);
    }
    addCustomer() {
        // add customer
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // remove customer
        throw new Error("Method not implemented.");
    }
}

// let acc = new savingAccount(1, 1000, 100);
// console.log(acc.debitAmount());



