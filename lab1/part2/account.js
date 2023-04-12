var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class account
var account = /** @class */ (function () {
    // private Acc_no: number;
    // private Balance: number;
    function account(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    account.prototype.debitAmount = function () {
        // debit amount
        return this.Balance * 0.1;
    };
    account.prototype.creditAmount = function () {
        // credit amount
        return this.Acc_no;
    };
    account.prototype.getBalance = function () {
        // get balance
        return this.Balance;
    };
    return account;
}());
var savingAccount = /** @class */ (function (_super) {
    __extends(savingAccount, _super);
    function savingAccount(Acc_no, Balance, DateOfOpening, MinBalance) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.DateOfOpening = DateOfOpening;
        _this.MinBalance = MinBalance;
        return _this;
    }
    savingAccount.prototype.addCustomer = function () {
        // add customer
        throw new Error("Method not implemented.");
    };
    savingAccount.prototype.removeCustomer = function () {
        // remove customer
        throw new Error("Method not implemented.");
    };
    return savingAccount;
}(account));
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount(Acc_no, Balance, DateOfOpening, interestRate) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.DateOfOpening = DateOfOpening;
        _this.interestRate = interestRate;
        return _this;
    }
    currentAccount.prototype.addCustomer = function () {
        // add customer
        throw new Error("Method not implemented.");
    };
    currentAccount.prototype.removeCustomer = function () {
        // remove customer
        throw new Error("Method not implemented.");
    };
    return currentAccount;
}(account));
// let acc = new savingAccount(1, 1000, 100);
// console.log(acc.debitAmount());
//interface Account
