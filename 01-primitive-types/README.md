# 🚀 Module 01: Primitive Data Types & Type Inference

Welcome to Module 01 of the **TypeScript Zero to Hero** series! 🎉

In TypeScript, all data types are divided into **3 main categories**:

1. 🟢 **Primitive Types** (Basic built-in values)
2. 🟡 **Special Types** (`any`, `unknown`, `never`, `void`)
3. 🔵 **Complex / Reference Types** (`Objects`, `Arrays`, `Tuples`, `Functions`)

In this module, we will learn about **Primitive Types**, **Type Inference**, and **Type Annotation** in very simple language.

---

## 📌 What are Primitive Types?

Primitive types are the simplest and most basic types in TypeScript. A primitive type holds a single simple value.

### 📋 List of 7 Primitive Types:
* 🔤 `string` — Text data
* 🔢 `number` — Numbers (both integers and decimals)
* 🔘 `boolean` — True or False (`true` / `false`)
* 🚫 `null` — Empty value (intentionally left blank)
* ❓ `undefined` — Value not assigned yet
* 🐘 `bigint` — Very large numbers
* 🔑 `symbol` — Unique and secret keys

---

## 🧠 Type Inference vs. Type Annotation

Understanding when to write types manually and when TypeScript does it automatically is very important!

### 1️⃣ Type Inference (TypeScript guesses the type)
If you create a variable and give it a value immediately, TypeScript automatically guesses its data type.

```typescript
// TypeScript automatically knows 'username' is a 'string'
let username = "Hridoy"; 

// ❌ Error: You cannot put a number into a string variable!
// username = 100; 

```

---

### 2️⃣ Type Annotation (You write the type manually)

You manually tell TypeScript what type a variable should use by using `: typeName`.

```typescript
// You manually set the type to number
let totalPoints: number = 250; 

```

---

## 💡 Simple Guide: When to Use Which?

### ✅ When to use Type Inference (Let TS handle it)

* When you declare a variable and set its value at the same time.
```typescript
let city = "Chittagong"; // Inferred as string
let count = 42;          // Inferred as number
let isActive = true;     // Inferred as boolean

```


* Keeping code simple and clean (writing `let name: string = "Hridoy"` is unnecessary).

---

### 🎯 When to write Explicit Type Annotation (Manual Type)

#### 1. When declaring a variable without an initial value

If you do not set a value right away, TypeScript gives it an `any` type (which removes safety).

```typescript
// ❌ BAD: TypeScript sets type to 'any'
let userEmail; 
userEmail = "dev@example.com";

// ✅ GOOD: Manually setting string keeps it safe
let userAddress: string; 
userAddress = "Chattogram, Bangladesh";

```

#### 2. Inside Function Parameters & Return Values

TypeScript cannot guess function parameters automatically.

```typescript
// ✅ Manually setting parameter types and return type
function calculateTotal(price: number, tax: number): number {
    return price + tax;
}

```

#### 3. Union Types (Multiple possible types)

When a variable can hold more than one type of data.

```typescript
// ✅ Variable can hold either a string OR null
let currentCourse: string | null = null; 
currentCourse = "Next.js Mastery";

```

#### 4. Empty Arrays

```typescript
// ✅ Manually declaring a number array
let scores: number[] = []; 
scores.push(95);

```

---

## 🔬 Detailed Examples of Primitive Types

---

### 1. String (`string`)

Used for text. You can use single quotes `'...'`, double quotes `"..."`, or backticks ``...``.

#### 💻 Code Example

```typescript
// Manual Type Annotation
const firstName: string = "Hridoy"; // Normal string
const role: string = 'Developer';   // Single quotes work too

// Template String (Combine text and variables)
const bio: string = `Name: ${firstName}, Role: ${role}`; 

// Type Inference (Best & Easy way)
let city = "Chittagong"; // TS automatically knows it's a string

```

#### ✅ What You CAN Do

```typescript
let greeting = "Hello";
greeting = greeting.toUpperCase(); // ✅ Change to uppercase ("HELLO")
greeting = greeting + " World";   // ✅ Combine two strings

```

#### ❌ What You CANNOT Do

```typescript
let greeting = "Hello";
// greeting = 42;                 // ❌ Cannot assign a number to a string
// greeting.toFixed(2);           // ❌ .toFixed() works on numbers, not strings

```

---

### 2. Number (`number`)

TypeScript uses `number` for all numbers (integers, decimals, negative numbers).

#### 💻 Code Example

```typescript
// Manual Type Annotation
let age: number = 22;             // Integer
let price: number = 99.99;        // Decimal number
let temperature: number = -5;     // Negative number

// Type Inference
let score = 100;                  // TS knows it's a number

```

#### ✅ What You CAN Do

```typescript
let count = 10;
count = count + 5;                // ✅ Math calculations (+, -, *, /)
let formatted = count.toFixed(2); // ✅ Convert to string with 2 decimals ("15.00")

```

#### ❌ What You CANNOT Do

```typescript
let count = 10;
// count = "10";                  // ❌ Cannot put text "10" in a number type
// count.toUpperCase();           // ❌ .toUpperCase() is for strings, not numbers

```

---

### 3. Boolean (`boolean`)

Holds only two values: `true` or `false`.

#### 💻 Code Example

```typescript
// Manual Type Annotation
let isLoggedIn: boolean = true;     // User is logged in
let hasPermission: boolean = false; // User does not have permission

// Type Inference
let isPending = false;              // TS knows it's a boolean

```

#### ✅ What You CAN Do

```typescript
let isCompleted = false;
isCompleted = !isCompleted;         // ✅ Change false to true using !
let canAccess = isCompleted && true; // ✅ Combine booleans with &&

```

#### ❌ What You CANNOT Do

```typescript
let isActive = true;
// isActive = "true";             // ❌ Text "true" is NOT a boolean
// isActive = 1;                  // ❌ Number 1 is NOT a boolean

```

---

### 4. Null (`null`)

`null` means a value is intentionally empty or missing.

#### 💻 Code Example

```typescript
// Using Union Type (holds text OR null)
let selectedCourse: string | null = null; // Currently empty

// Set data later
selectedCourse = "TypeScript Mastery"; // Now holds a string

```

#### ✅ What You CAN Do

```typescript
let data: string | null = null;
if (data !== null) {
  console.log(data.length);       // ✅ Safe to check length after checking null
}

```

#### ❌ What You CANNOT Do

```typescript
let data: null = null;
// data = "New Data";             // ❌ Cannot put text inside strict 'null' type
// console.log(data.length);      // ❌ Cannot read properties of null directly

```

---

### 5. Undefined (`undefined`)

`undefined` means a variable exists, but no value has been given to it yet.

#### 💻 Code Example

```typescript
// Manual Type Annotation
let userResponse: undefined = undefined; 

// Variable not assigned yet
let userAge: number | undefined; // Holds undefined until a number is given

```

#### ✅ What You CAN Do

```typescript
let age: number | undefined;
if (age === undefined) {
  age = 20;                      // ✅ Give a value if it is undefined
}

```

#### ❌ What You CANNOT Do

```typescript
let unassignedVar: undefined = undefined;
// unassignedVar = 50;           // ❌ Cannot put a number in strict 'undefined' type

```

---

### 6. BigInt (`bigint`)

Used for extremely big integers that regular `number` cannot handle safely. BigInt numbers end with `n`.

#### 💻 Code Example

```typescript
// Manual Type Annotation
let maxSafeInt: bigint = 9007199254740991n; // Add 'n' at the end
let largeValue: bigint = BigInt("9007199254740992"); 

// Type Inference
let hugeNumber = 12345678901234567890n;     // TS knows it's bigint

```

#### ✅ What You CAN Do

```typescript
let big1 = 100n;
let big2 = 200n;
let sum = big1 + big2;            // ✅ Add bigints together (300n)

```

#### ❌ What You CANNOT Do

```typescript
let bigNum = 100n;
let regularNum = 50;
// let total = bigNum + regularNum; // ❌ Cannot mix BigInt and normal numbers directly

```

---

### 7. Symbol (`symbol`)

Symbols are always unique values. They are mostly used to create unique property keys for objects.

#### 💻 Code Example

```typescript
// Manual Type Annotation
const id1: symbol = Symbol("user_id"); 
const id2: symbol = Symbol("user_id"); 

console.log(id1 === id2);               // Output: false (Symbols are always unique!)

```

#### ✅ What You CAN Do

```typescript
const key: symbol = Symbol("apiKey");
const config = {
  [key]: "SECRET_12345"                 // ✅ Use symbol as a unique object key
};

```

#### ❌ What You CANNOT Do

```typescript
const sym = Symbol("test");
// const str = "Key: " + sym;           // ❌ Cannot directly combine Symbol with text

```

---

## ⚖️ Summary Table

| Type | What it stores | Example | Allowed Action | Common Mistake |
| --- | --- | --- | --- | --- |
| **`string`** | Text | `"TypeScript"` | Text methods, joining text | Passing numbers without conversion |
| **`number`** | All numbers | `42`, `3.14` | Math (+, -, *), `.toFixed()` | Putting quotes around numbers (`"42"`) |
| **`boolean`** | Logical true/false | `true`, `false` | `!`, `&&`, ` |  |
| **`null`** | Empty on purpose | `null` | Checking if empty | Reading properties without checking |
| **`undefined`** | Value not given yet | `undefined` | Setting value later | Using it by mistake in return output |
| **`bigint`** | Huge numbers | `1000n` | Math between bigints | Mixing with regular numbers |
| **`symbol`** | Unique secret key | `Symbol()` | Unique object keys | Adding to strings directly |

---

## 🎯 Quick Rules to Remember

1. **Primitive values do not change:** Changing a string or number creates a new value in memory.
2. **Type Inference saves time:** Let TS guess the type when you give a value right away.
3. **Use Manual Types for:** Function parameters, uninitialized variables, and union types.
4. **`null` vs `undefined`:** `undefined` means "not assigned yet", `null` means "intentionally empty".
