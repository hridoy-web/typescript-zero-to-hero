# 🏗️ Module 01: TypeScript Foundations

---

## 📌 Topic 01: Type Inference, Type Annotation & 7 Primitive Types
**File:** [`01-primitives.ts`](./01-primitives.ts)

### 1. Why TypeScript? (The Problem & Solution)
* **JavaScript (Problem):** Dynamically typed. Type errors are only caught at **runtime** (crashing in front of real users).
* **TypeScript (Solution):** Statically typed. Catches type errors at **compile-time** right inside VS Code before running the code.

---

### 2. Inference vs. Annotation (When to use What)

* **Type Inference (Automatic):** 
  * When you declare a variable and assign a value on the same line, TypeScript automatically detects the type.
  * *Example:* `let shopName = "NexUs";` (TS knows it's a `string`).
  * *Best Practice:* Use inference for simple variables with immediate values. Do not write redundant types.
* **Type Annotation (Manual):** 
  * Manually specifying the data type using `: typeName`.
  * *When to use:* When declaring an empty variable (`let id: string;`), typing function parameters/returns, or strict object shapes.

---

### 3. The 7 Primitive Data Types (Master Matrix)

| Type Name | What It Stores | Usage Frequency | Real-World Example |
| :--- | :--- | :--- | :--- |
| **`string`** | Text data inside quotes | ⭐⭐⭐⭐⭐ (Daily) | `const name: string = "Hridoy";` |
| **`number`** | Whole & decimal numbers | ⭐⭐⭐⭐⭐ (Daily) | `const price: number = 399.50;` |
| **`boolean`** | `true` or `false` | ⭐⭐⭐⭐⭐ (Daily) | `const isPaid: boolean = true;` |
| **`null`** | Intentionally empty value | ⭐⭐⭐⭐ (Often) | `const discount = null;` |
| **`undefined`** | Value not assigned yet | ⭐⭐⭐⭐ (Often) | `let bonus: undefined = undefined;` |
| **`bigint`** | Massive integers (ends with `n`) | ⭐ (Rare) | `const distance: bigint = 8999n;` |
| **`symbol`** | 100% unique memory key | ⭐ (Rare) | `const key: symbol = Symbol("id");` |

---

### 🧠 Key Takeaways & Gotchas
* **`let` vs `const` with `null`/`undefined`:** Always use explicit annotations for empty/uninitialized variables to prevent strict check issues.
* **Symbol Equality:** `Symbol("key") === Symbol("key")` is **always `false`** because every `Symbol()` call generates a completely unique memory reference, regardless of the description label.
* **BigInt Rule:** You cannot mix `bigint` and normal `number` in mathematical operations (`100n + 50` throws a compile-time error).