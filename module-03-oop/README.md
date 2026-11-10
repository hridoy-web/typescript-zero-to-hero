# 🏛️ Module 03: Object-Oriented Programming (OOP) in TypeScript

---
## 📌 Topic 01: Classes, Constructors & Parameter Properties
**File:** [`01-class-and-parameter-properties.ts`](./01-class-and-parameter-properties.ts)
### 1. 💡 Why Do We Need OOP? (OOP vs. Functional Programming)
Can we build software without OOP? **Yes, 100%!** Modern React and many Express.js applications are written purely using **Functional Programming (Functions and Hooks)**.
#### When Should You Use OOP?
* **Enterprise Frameworks (NestJS, Angular, Spring Boot):** Large backend systems are built around OOP because classes, modules, and dependency injection scale cleanly across large engineering teams.
* **Complex Real-World Modeling:** When an entity has both **State (Data)** and **Behavior (Functions)** that belong together (e.g., A `BankAccount` has a `balance` and methods like `deposit()` and `withdraw()`).
---
### 2. What is a Constructor? (The Birth Function)
* **Definition:** A constructor is a special lifecycle method inside a class.
* **When does it run?** It executes **automatically once** at the exact moment a new object is created in memory via the `new` keyword (e.g., `new User("Hridoy")`).
* **Purpose:** To initialize default values and configure the object's starting state.
---
### 3. The 3X Boilerplate Problem in Traditional Classes
In traditional JavaScript and TypeScript, adding a single property required typing it **3 separate times**:
1. Class field declaration (`name: string;`)
2. Constructor parameter (`constructor(name: string)`)
3. Body assignment (`this.name = name;`)
If a class had 8 fields, developers had to write 24 lines of repetitive, error-prone code.
---
### 4. What is `public` and Why Use Parameter Properties?
* **What does `public` mean?** It is an **Access Modifier**. It means the property is open and can be accessed from anywhere—inside the class or outside by other functions.
* **The Magic of Parameter Properties:**  
  When you prefix a constructor parameter with `public`, `private`, `protected`, or `readonly`:
  ```typescript
  class User {
    constructor(public name: string, public readonly id: number) {}
  }
  ```
  TypeScript automatically:
  1. Creates the property on the class.
  2. Binds `this.name = name` behind the scenes.
  3. Eliminates all repetitive boilerplate code.
---
### 🧠 Senior Engineering Rule of Thumb
* Use **Functional Programming** for lightweight utility scripts, React UI components, and simple REST API routes.
* Use **Object-Oriented Programming (OOP)** when working with NestJS, complex domain logic, game engines, or large architectures that require strict data encapsulation and inheritance.
