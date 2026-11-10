// Module 03: Object-Oriented Programming (OOP)
// Topic 01: Classes, Constructors, and Parameter Properties

// 01: What is a Constructor?
// The constructor is a special lifecycle function that runs automatically 
// at the exact moment a new object is created in memory using 'new'.
class UserAccount {
  username: string;

  constructor(initialName: string) {
    this.username = initialName; // Setting initial birth data
    console.log("01 Constructor executed: Object created for", this.username);
  }
}

// const userOne = new UserAccount("Hridoy");


// 02: The 3X Boilerplate Problem in Traditional Classes
// Problem: You have to write 'email' in 3 places (declaration, param, and this.email)
class OldStyleUser {
  email: string; // 1. Declare

  constructor(email: string) { // 2. Receive
    this.email = email;        // 3. Assign
  }
}

const oldUser = new OldStyleUser("old@example.com");
// console.log("02 Old Style Email:", oldUser.email);


// 03: The Modern Solution -> Parameter Properties
// Why use 'public'? 
// Prefixing parameters with 'public' signals TypeScript to automatically
// declare and assign 'this.property = property' behind the scenes!
class ModernUser {
  constructor(
    public readonly id: number,  // Accessible everywhere, but cannot be mutated
    public fullName: string,     // Accessible everywhere, can be changed
    public role: string          // Accessible everywhere
  ) {
    // Zero boilerplate! No need to write this.fullName = fullName
  }

  getProfile(): string {
    return `ID: ${this.id} | Name: ${this.fullName} | Role: ${this.role}`;
  }
}

const modernDev = new ModernUser(101, "Hridoy Chowdhury", "Fullstack Developer");
// console.log("03 Modern Dev Profile:", modernDev.getProfile());


// 04: Real-World OOP Example: Bank Account (State + Behavior Bundling)
class BankAccount {
  constructor(
    public readonly accountNo: string,
    public owner: string,
    public balance: number
  ) {}

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return this.balance;
    }
    this.balance -= amount;
    return this.balance;
  }
}

// const myBank = new BankAccount("AC-2026-BD", "Hridoy", 5000);
// console.log("04 Initial Bank Balance:", myBank.balance);
// console.log("04 After Deposit:", myBank.deposit(3000));
// console.log("04 After Withdrawal:", myBank.withdraw(2000));