# 🚀 Module 03: Arrays & Tuples (Reference Types Part 1)

Welcome to Module 03 of the **TypeScript Zero to Hero** series! 🎉

In this module, we will learn about two important complex data types used to store multiple values:
1. **Arrays** (Lists of items with the same type)
2. **Tuples** (Fixed-length arrays with specific types at each position)

---

## 📌 1. Arrays (`Array`)
An array holds a collection of values. In TypeScript, you can explicitly define what type of data the array will store.

### How to declare arrays:
* Using bracket syntax: `type[]`
* Using generic array type: `Array<type>`

```typescript
// Explicit type annotation for arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Hridoy", "Rahim", "Karim"];

// Type Inference (TS automatically infers array type)
let mixedNumbers = [10, 20, 30]; // Inferred as number[]

```

#### ✅ What You CAN Do

```typescript
let scores: number[] = [85, 90];
scores.push(95);                 // ✅ Allowed: Add items of the same type
let firstScore = scores[0];      // ✅ Allowed: Access by index

```

#### ❌ What You CANNOT Do

```typescript
let scores: number[] = [85, 90];
// scores.push("Ninety");        // ❌ Error: Cannot push string into a number array

```

---

## 📌 2. Tuples (`Tuple`)

A **Tuple** is a special type of array in TypeScript that has:

1. A **fixed length**.
2. **Specific types** defined in a strict order for each index.

```typescript
// Declaring a tuple: [number, string]
let userInfo: [number, string] = [101, "Hridoy"]; 

// userInfo = ["Hridoy", 101]; // ❌ Error: Types and order must match!

```

#### ✅ What You CAN Do

```typescript
let user: [number, string] = [1, "Hridoy"];
let id: number = user[0];        // ✅ Allowed: Access first element (number)
let name: string = user[1];      // ✅ Allowed: Access second element (string)

```

#### ❌ What You CANNOT Do

```typescript
let user: [number, string] = [1, "Hridoy"];
// user = [1, "Hridoy", true];   // ❌ Error: Exceeds fixed tuple length
// user = ["Hridoy", 1];         // ❌ Error: Wrong data types order

```

---

## ⚖️ Quick Summary Matrix

| Complex Type | Description | Structure Example | Best Used For |
| --- | --- | --- | --- |
| **`Array`** | List of items (any length, same type) | `number[]` or `Array<string>` | Lists of items, items of unknown count |
| **`Tuple`** | Fixed-length list with ordered types | `[number, string, boolean]` | Coordinates `[x, y]`, Key-Value pairs, API responses |
