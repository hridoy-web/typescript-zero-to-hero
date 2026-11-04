# 🚀 Module 02: Special Data Types

Welcome to Module 02 of the **TypeScript Zero to Hero** series! 🎉

In this module, we will learn about **Special Data Types** in TypeScript:
1. `any` (The escape hatch - use with caution)
2. `unknown` (The safer version of `any`)
3. `void` (For functions that do not return anything)
4. `never` (For functions that never finish normally)

---

## 📌 1. Any (`any`)
The `any` type turns off TypeScript's type checking completely. It acts just like regular JavaScript. 
* **Warning:** Try to avoid using `any` because it removes the safety net of TypeScript.

```typescript
let data: any = "Hello";
data = 42;          // ✅ Allowed: can change to any type
data = true;        // ✅ Allowed
data.toUpperCase(); // ✅ No error at compile time, but can crash at runtime if it's not a string!

```

---

## 📌 2. Unknown (`unknown`)

`unknown` is the safer and smarter brother of `any`. You can assign *any* value to an `unknown` variable, but you **cannot** use it until you check its type first!

```typescript
let userInput: unknown = "Hridoy";
// userInput.toUpperCase(); // ❌ Error: TypeScript won't let you use it directly!

// ✅ Safe approach: Type narrowing (checking type first)
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Works safely here!
}

```

---

## 📌 3. Void (`void`)

`void` is used mostly for functions that **do not return any value**.

```typescript
function printMessage(message: string): void {
  console.log(message);
  // No return statement needed
}

```

---

## 📌 4. Never (`never`)

The `never` type represents a state that **never happens**. It is mostly used for functions that throw an error or run an infinite loop (they never successfully finish and return).

```typescript
function throwError(errorMessage: string): never {
  throw new Error(errorMessage); // Function stops here and throws error
}

```

---

## ⚖️ Quick Summary Matrix

| Special Type | Description | Allowed Action | Best Practice |
| --- | --- | --- | --- |
| **`any`** | Turns off type checking | Assign anything, call any method | Avoid using it |
| **`unknown`** | Safe flexible type | Must check type before using | Use when data type is unknown |
| **`void`** | No return value in functions | Just execute code | Use for log or print functions |
| **`never`** | Never returns normally | Throw error or infinite loop | Use for error-handling functions |
