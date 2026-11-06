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

---

## 📌 Topic 02: Arrays, Tuples, Objects, Readonly & Literal Types
**File:** [`02-arrays-tuples-objects.ts`](./02-arrays-tuples-objects.ts)

### 1. Arrays (Flexible Collections of Data)
* **What it is:** A list that can hold multiple items of the same data type.
* **Inference vs Annotation:** 
  * If you write `const items = ["Laptop", "Mouse"]`, TypeScript automatically detects it as `string[]` (**Type Inference**).
  * If you declare an empty array to fill later, you must use explicit typing like `const prices: number[] = []` (**Type Annotation**).
* **Union Arrays:** You can allow multiple specific data types in one array using the pipe sign: `(string | number)[]`.

---

### 2. Tuples (Fixed-Length & Strict-Order Arrays)
* **What it is:** A specialized array where the exact length and the strict order of data types are locked.
  * *Example:* `let location: [number, string] = [23.8103, "Chittagong"];` (First item must be a number, second must be a string).
* **⚠️ The Tuple Trap & Pro Fix:** By default, normal TypeScript tuples allow `.push()` which can break the strict order. To make a tuple 100% secure and immutable, always use `readonly`:
  * `const userData: readonly [number, string] = [988, "Arnab"];`

---

### 3. Literal Types (Exact Values as Types)
* **What it is:** Instead of accepting any general string or number, a literal type forces a variable to accept only **one specific exact value**.
  * *Example:* `let status: "pending" | "processing" | "shipped";`
* **Why use it?** It prevents silent typos and business-logic bugs across your app.

---

### 4. Object Blueprints, Optional `?` & `readonly`
* **Object Blueprint:** Unlike simple variables, in production, we explicitly define the shape of an object so developers cannot add wrong or accidental properties.
* **Optional Properties (`?`):** Adding a question mark (e.g., `age?: number`) tells TypeScript that this field is optional; it can exist or remain missing.
* **`readonly` Modifier:** Locks a property so it can never be changed after creation (ideal for primary database IDs).

---

### 📊 Primitive Types Usage Guide in Arrays & Tuples (Industry Standard)

When working with complex data structures like Arrays, Tuples, and Objects, different primitive types have completely different usage rates:

| Primitive Type | Usage Frequency in Arrays/Tuples | Why & Where It Is Used |
| :--- | :--- | :--- |
| **`string`** | ⭐⭐⭐⭐⭐ (Everyday) | Used everywhere for lists of names, IDs, emails, and textual data. |
| **`number`** | ⭐⭐⭐⭐⭐ (Everyday) | Used heavily for price lists, cart totals, coordinates, and metrics. |
| **`boolean`** | ⭐⭐⭐⭐ (Very Often) | Used commonly for feature flags, permission lists, or status checks (`boolean[]`). |
| **`null`** | ⭐ (Rare / Almost Never) | Rarely kept inside an array. Normally used for individual unassigned fields, not list items. |
| **`undefined`** | ⭐ (Almost Never) | Avoided in arrays. Standard arrays use missing indexes or optional properties instead. |
| **`bigint`** | ⭐ (Rare Case) | Used only in specialized high-level financial or crypto ledger arrays. |
| **`symbol`** | ⭐ (Rare Case) | Never used inside standard application arrays or tuples. |