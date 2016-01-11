//Create a class for all accounts 
var Account = function(accountType) {
    this.balance = 0;
    //accountType used to reference HTML field 
    this.accountType = accountType;
};

//Define the methods that will be standard for all accounts 
Account.prototype = {
    //Add desired amount of deposit into the account
    deposit: function() {
        this.balance += parseInt($('#amount' + this.accountType).val());
        this.updateDisplay();
    },
    //Withdraw desired amount from account, if possible
    withdraw: function() {
        var amount = parseInt($('#amount' + this.accountType).val());;
        if (amount <= this.balance) {
            this.balance -= amount
        }
        this.updateDisplay();
    },
    updateDisplay: function() {
        this.balance <= 0 ? $('#balance' + this.accountType).addClass('zero') : $('#balance' + this.accountType).removeClass('zero');
        $('#amount' + this.accountType).val('');
        $('#balance' + this.accountType).text('$' + this.balance);
    }
};

//Create 0bject of Account
var accountChecking = new Account("Checking");

//Retirement account inherits from Account. Only one method needs to be changed - deposit, to add employer contribution
function Retirement(accountType, employerContribution) {
    Account.call(this, accountType);
    this.employerContribution = employerContribution;
}

Retirement.prototype = Object.create(Account.prototype);
Retirement.prototype.constructor = Retirement;
Retirement.prototype.deposit = function() {
    //Add desired amount of deposit into the account, plus employer contribution
    this.balance += parseInt($('#amount' + this.accountType).val()) + this.employerContribution;
    this.updateDisplay();
};

var accountRetirement = new Retirement("Retirement", 10);

$(function() {

    $('#depositChecking').click(accountChecking.deposit.bind(accountChecking));
    $('#depositRetirement').click(accountRetirement.deposit.bind(accountRetirement));
    $('#withdrawChecking').click(accountChecking.withdraw.bind(accountChecking));
    $('#withdrawRetirement').click(accountRetirement.withdraw.bind(accountRetirement));
    accountChecking.updateDisplay();
    accountRetirement.updateDisplay();

});