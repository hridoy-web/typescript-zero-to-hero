# Module 01: Primitive Data Types & Type Inference

Welcome to the first module of the **TypeScript Zero to Hero** series! 🚀

In TypeScript, data types can be broadly classified into 3 primary categories:

1. **Primitive Types** (Basic built-in primitive values)
2. **Special Types** (`any`, `unknown`, `never`, `void`)
3. **Complex / Reference Types** (`Objects`, `Arrays`, `Tuples`, `Functions`)

In this module, we focus exclusively on **Primitive Types** and **Type Inference**.

---

## 📌 What are Primitive Types?

Primitive types are the most fundamental building blocks in TypeScript. They represent single, immutable raw values that are directly operated upon at the lowest level of the language.

### Overview of Primitive Types:
* 🔤 `string` — Textual data
* 🔢 `number` — Numeric values (integers and floating points)
* 🔘 `boolean` — Logical values (`true` or `false`)
* 🚫 `null` — Intentional absence of any value
* ❓ `undefined` — Uninitialized or unassigned value
* 🐘 `bigint` — Arbitrarily large integers
* 🔑 `symbol` — Unique and immutable identifiers

---

## 🧠 What is Type Inference?

TypeScript is smart enough to figure out the data type of a variable automatically based on its initial value. This mechanism is called **Type Inference**.

```typescript
let username = "Hridoy"; // TypeScript automatically infers 'username' as 'string'
// username = 100;       // ❌ Error: Type 'number' is not assignable to type 'string'.
```

### Type Annotation vs. Type Inference
* **Explicit Type Annotation:** You manually specify the type using `: typeName`.
* **Type Inference:** TypeScript assigns the type automatically based on the assigned value.

---

## 🔬 Detailed Breakdown of Primitive Types

---

### 1. String (`string`)

Used for textual data. Supports single quotes `'...'`, double quotes `"..."`, and template literals `` `...` ``.

#### Code Example
```typescript
// Explicit Type Annotation
const firstName: string = "Hridoy"; // Storing a standard string value
const role: string = 'Developer';   // Single quotes are equally valid

// Template Literal (String Interpolation)
const bio: string = `Name: ${firstName}, Role: ${role}`; // Embedded expression

// Type Inference
let city = "Chittagong"; // Inferred as string automatically
```

#### ✅ What You CAN Do
```typescript
let greeting = "Hello";
greeting = greeting.toUpperCase(); // ✅ Returns "HELLO"
greeting = greeting + " World";   // ✅ String concatenation allowed
```

#### ❌ What You CANNOT Do
```typescript
let greeting = "Hello";
// greeting = 42;                 // ❌ Cannot assign a number to a string variable
// greeting.toFixed(2);           // ❌ Property 'toFixed' does not exist on type 'string'
```

---

### 2. Number (`number`)

TypeScript does not distinguish between integers (`int`), floats (`float`), or doubles (`double`). All numbers are represented by the standard double-precision 64-bit binary format IEEE 754.

#### Code Example
```typescript
// Explicit Type Annotation
let age: number = 22;             // Integer
let price: number = 99.99;        // Floating-point number
let temperature: number = -5;     // Negative number
let hex: number = 0xf00d;         // Hexadecimal value

// Type Inference
let score = 100;                  // Inferred as number
```

#### ✅ What You CAN Do
```typescript
let count = 10;
count = count + 5;                // ✅ Arithmetic operations allowed
let formatted = count.toFixed(2); // ✅ Call built-in number methods ("15.00")
```

#### ❌ What You CANNOT Do
```typescript
let count = 10;
// count = "10";                  // ❌ Cannot reassign string to number
// count.toUpperCase();           // ❌ Property 'toUpperCase' does not exist on type 'number'
```

---

### 3. Boolean (`boolean`)

Represents a simple binary truth value: `true` or `false`.

#### Code Example
```typescript
// Explicit Type Annotation
let isLoggedIn: boolean = true;   // User is currently authenticated
let hasPermission: boolean = false; // User lacks admin permissions

// Type Inference
let isPending = false;            // Inferred as boolean
```

#### ✅ What You CAN Do
```typescript
let isCompleted = false;
isCompleted = !isCompleted;       // ✅ Logical NOT operator toggles value to true
let canAccess = isCompleted && true; // ✅ Logical AND operator
```

#### ❌ What You CANNOT Do
```typescript
let isActive = true;
// isActive = "true";             // ❌ String "true" is not a boolean
// isActive = 1;                  // ❌ Number 1 is not a boolean (truthy is not boolean type)
```

---

### 4. Null (`null`)

`null` represents an intentional absence of an object value. It is explicitly assigned by the developer to signal "empty" or "no value".

#### Code Example
```typescript
// Explicit Type Annotation
let selectedCourse: string | null = null; // Union type: holds string or null

// Simulating data arrival
selectedCourse = "TypeScript Mastery";    // Reassigned to string once loaded
```

#### ✅ What You CAN Do
```typescript
let data: string | null = null;
if (data !== null) {
  console.log(data.length);       // ✅ Safe access inside null-check block
}
```

#### ❌ What You CANNOT Do
```typescript
let data: null = null;
// data = "New Data";             // ❌ Cannot assign string to variable strictly typed as 'null'
// console.log(data.length);      // ❌ Object is possibly 'null'
```

---

### 5. Undefined (`undefined`)

`undefined` represents an uninitialized variable or an unassigned value.

#### Code Example
```typescript
// Explicit Type Annotation
let userResponse: undefined = undefined; // Explicitly set as undefined

// Optional/Unassigned state using Union
let userAge: number | undefined;        // Defaults to undefined until assigned
```

#### ✅ What You CAN Do
```typescript
let age: number | undefined;
if (age === undefined) {
  age = 20;                             // ✅ Assign value if uninitialized
}
```

#### ❌ What You CANNOT Do
```typescript
let unassignedVar: undefined = undefined;
// unassignedVar = 50;                  // ❌ Cannot assign number to type 'undefined'
```

---

### 6. BigInt (`bigint`)

Used to safely store and manipulate arbitrarily large integers beyond the safe integer limit for numbers (`Number.MAX_SAFE_INTEGER` = $2^{53} - 1$). BigInt literals end with an `n` suffix.

#### Code Example
```typescript
// Explicit Type Annotation
let maxSafeInt: bigint = 9007199254740991n; // Notice the 'n' at the end
let largeValue: bigint = BigInt("9007199254740992"); // Created using constructor

// Type Inference
let hugeNumber = 12345678901234567890n;    // Inferred as bigint
```

#### ✅ What You CAN Do
```typescript
let big1 = 100n;
let big2 = 200n;
let sum = big1 + big2;            // ✅ Arithmetic operations between bigints (300n)
```

#### ❌ What You CANNOT Do
```typescript
let bigNum = 100n;
let regularNum = 50;
// let total = bigNum + regularNum; // ❌ Cannot mix BigInt and Number types directly
// Math.max(bigNum, 200n);        // ❌ Math object methods do not support BigInt
```

---

### 7. Symbol (`symbol`)

Symbols are completely unique and immutable primitive values, often used to create private or unique object keys.

#### Code Example
```typescript
// Explicit Type Annotation
const id1: symbol = Symbol("user_id"); // Description passed to Symbol constructor
const id2: symbol = Symbol("user_id"); // Same description, but unique instance

console.log(id1 === id2);               // Output: false (Symbols are always unique)
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
// const str = "Key: " + sym;           // ❌ Cannot implicitly convert Symbol to string
```

---

## ⚖️ Quick Summary Matrix

| Primitive Type | Representation | Example Value | Allowed Operations | Common Mistake |
| :--- | :--- | :--- | :--- | :--- |
| **`string`** | Text | `"TypeScript"` | String methods, concatenation | Passing numbers without conversion |
| **`number`** | Numeric | `42`, `3.14` | Math operations, `.toFixed()` | Assigning numeric strings (`"42"`) |
| **`boolean`** | Truth | `true`, `false` | Logical operations (`!`, `&&`) | Confusing truthy values with `boolean` |
| **`null`** | Intentional Empty | `null` | Equality checks | Accessing properties directly |
| **`undefined`**| Uninitialized | `undefined` | Fallback initialization | Unintentional usage in function output |
| **`bigint`** | Huge Integers | `1000n` | BigInt arithmetic | Mixing with regular `number` |
| **`symbol`** | Unique Identifier | `Symbol()` | Unique property keys | String concatenation |

---

## 🎯 Key Takeaways

1. **Primitive values are immutable:** Modifying a string or number generates a new value in memory.
2. **Type Inference saves time:** You don't always need to annotate types manually if you initialize variables immediately.
3. **`null` vs `undefined`:** `undefined` means a variable has not been given a value yet; `null` means a value was intentionally left blank.
4. **Strict Type Safety:** TypeScript prevents mixing incompatible types at compile time, eliminating runtime crashes!