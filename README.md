# JavaScript BANK Project Description:

This is a front end only online banking application.  The problem is that this application is poorly written, and is in desperate need of a refactor.

The existing code already satisfies the following requirements:

- A user can deposit money into one of the bank accounts.
- A user can withdraw money from one of the bank accounts.
- The balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
- When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
- The retirement account has an added feature: Every time you deposit money into this account, your employer adds an additional $10 to your balance with each deposit (what a nice employer!).  

# Your Job:

1) Refactor the code so that it is:

  - Object-oriented (as opposed to procedural)
  - DRY
  - Follows good naming conventions

2) Comment the code to explain what it does and why you made certain design decisions.

**Bonus:** Don't use any jQuery

**Bonus 2:** Use the retirement account to demonstrate inheritance