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

---

## 📌 Topic 03: Functions, Parameters, Rest/Spread & Destructuring
**File:** [`03-functions-and-destructuring.ts`](./03-functions-and-destructuring.ts)

This handbook is designed to lock every concept into your permanent memory for interviews, assignments, and production-grade software engineering.

---

### 1. Functions: Regular vs. Arrow Functions & Hoisting

* **Regular Function (`function name() {}`):** 
  * **When to use:** For large utility functions or when you want the benefit of **Hoisting**.
  * **What is Hoisting?** Hoisting is JavaScript's default behavior where variable and function declarations are moved (or "hoisted") to the top of their scope *before* code execution. This means you can call a regular function *before* writing it in your code file without throwing an error.
* **Arrow Function (`const name = () => {}`):**
  * **When to use:** Modern industry standard (especially in React/Next.js components and callbacks like `.map()` or `.filter()`). Note: Arrow functions do *not* support hoisting; you must declare them before calling.

---

### 2. Explicit Return Types & The `void` Keyword

* **Why Always Declare Explicit Return Types?** 
  * While TypeScript can sometimes *infer* (guess) return types based on the function body, relying on inference is a bad practice. Writing explicit return types (e.g., `(): number => {}`) acts as a **safety lock**. It prevents accidental bugs (like returning the wrong data type), enforces a strict code contract, and ensures clarity across your team without needing to parse the entire function body.
* **What is `void`?**
  * **When to use:** Used as a return type when a function performs an action (like logging data or saving to a database) but **returns nothing**. It explicitly blocks you from writing a `return` statement inside that function.

---

### 3. Parameters Best Practices: How Many & Default Values

* **How many parameters are ideal?** 
  * Keeping parameters to **1 to 3** is best practice. If a function requires more than 3 parameters (e.g., creating a user profile with 10 fields), **never pass them individually**. Instead, bundle them into a single **Object Parameter**, which is cleaner, safer, and order-independent.
* **Default Parameter Values (`discountRate: number = 0.05`):**
  * **When to use:** When you want a fallback value. If the caller forgets to pass that argument or passes `undefined`, TypeScript automatically assigns the default value. You can easily override it by passing a dynamic value.

---

### 4. Spread Operator (`...`) vs. Rest Parameters (`...`)

Many developers confuse these two because they both use three dots (`...`), but their roles are completely opposite:

| Feature | Spread Operator (`...`) | Rest Parameters (`...`) |
| :--- | :--- | :--- |
| **Direction** | **Expands / Unpacks** elements. | **Collects / Packs** elements. |
| **Where it is used** | Used in arrays and objects to copy, clone, or merge data (`[...arr1, ...arr2]`). | Used in function parameters to accept unlimited arguments into a single array (`(...prices: number[])`). |
| **Real-World Role** | Immutable state updates and combining lists safely. | Handling math calculations, flexible API inputs, or argument lists of unknown length. |

* **Best Practice:** Always use Spread (`...`) for immutability instead of mutating arrays/objects directly. Always type Rest parameters explicitly as an array (e.g., `...scores: number[]`).

---

### 5. Object & Array Destructuring & The Aliasing Trap

* **Object Destructuring:** Extracting properties directly from an object into variables (e.g., `const { title, price } = product`). In React, we heavily use parameter destructuring (`function MyComponent({ title }: Product)`) for clean component props.
* **Array Destructuring with Rest:** Extracting specific items by position while gathering the rest into a clean array (e.g., `const [first, ...remaining] = scores;`).
* **⚠️ What is ALIASING (The Renaming Trap)?**
  * **Definition:** Aliasing means **renaming a destructured variable** to prevent naming collisions when a variable with the exact same name already exists in your current scope.
  * **Syntax:** We use a colon (`:`) inside the curly braces. Example: `{ title: productTitle }`. 
  * **Interview Note:** Remember, inside object destructuring, the colon (`:`) **does NOT mean type annotation**; it means *rename this property to this new variable name*.

---

## 📌 Topic 04: Type Alias, Union (`|`) & Intersection (`&`)
**File:** [`04-union-intersection-aliases.ts`](./04-union-intersection-aliases.ts)

This handbook serves as a definitive mental model and cheat sheet for custom types, logical type combinations, and advanced type-narrowing patterns.

---

### 1. Type Alias (`type` Keyword)

* **Mental Model:** Think of a Type Alias as giving a custom **nickname** to any complex type signature so you don't have to rewrite it everywhere.
* **Why Use It?** Enforces the **DRY (Don't Repeat Yourself)** principle. Instead of repeating `{ id: string; name: string }` across 20 functions, declare it once and reuse it across the entire codebase.
* **What Can It Alias?**
  * **Primitives & Unions:** `type ID = string | number;`
  * **Objects:** `type UserProfile = { username: string; email: string; };`
  * **Function Blueprints:** `type MathOperation = (firstNum: number, secondNum: number) => number;` (Crucial for React callback props like `onClick` or `onSubmit`).

---

### 2. Union Types (`|`) - Logical "OR"

* **Mental Model (Restaurant Menu):** You can order a soda **OR** a juice, but not both under a single choice selection.
* **Literal Union:** Restricts a variable strictly to a closed set of specific string or number values (e.g., `type PaymentGateway = "BKASH" | "NAGAD" | "ROCKET";`). Eliminates accidental typos and gives instant IDE autocompletion.
* **Discriminated Union (Senior Engineering Pattern):**
  * A pattern where every object in a Union shares a common literal property (called the **Discriminant**, e.g., `status: "success"` vs `status: "error"`).
  * Allows TypeScript to perform automatic and safe **Type Narrowing** inside standard `if/else` or `switch` statements without runtime errors.

---

### 3. Intersection Types (`&`) - Logical "AND"

* **Mental Model (Superhero Mashup):** Iron Man's suit **AND** Doctor Strange's magic combined into one single person—possessing every single power simultaneously.
* **Concept:** Merges multiple separate type blueprints into one comprehensive **Composite Super-Type**.
* **Object Requirement:** Any variable instantiated with an Intersection type **must satisfy every property** of all joined types.
* **Production Use-Case:** Creating scalable Database Entities (e.g., combining `BaseEntity` timestamps with `EmployeeDetails` and `AdminPrivileges`).

---

### 4. ⚠️ The Impossible Intersection Gotcha (`never` Type)

* **Interview Trap Question:** What happens if you intersect two object types containing identical keys with conflicting primitive types?
  ```typescript
  type StringID = { id: string };
  type NumberID = { id: number };
  type Impossible = StringID & NumberID;


* **Answer:** TypeScript evaluates the property `id` as `string & number`. Since no single value in JavaScript can simultaneously be both a `string` and a `number`, TypeScript collapses the property type to **`never`**. Attempting to assign any value to this object will cause a strict compilation failure!

---

### 📊 Union vs. Intersection Master Comparison
| Feature | Union Type (`\|`) | Intersection Type (`&`) |
| :--- | :--- | :--- |
| **Logic** | Logical **OR** (Either / Or) | Logical **AND** (Both / All) |
| **Mental Model** | A menu where you choose **one** option | An all-in-one superhero possessing **all** powers |
| **Object Requirement**| Must satisfy **at least one** branch | Must strictly satisfy **all joined types** |
| **Real-World Example**| HTTP response states (`Success \| Error`) | Database entity (`BaseModel & UserInfo & Permissions`) |
| **Type Conflict** | Expands allowed choices | Conflicting primitive keys collapse into **`never`** |

---

## 📌 Topic 05: Ternary, Optional Chaining (`?.`) & Nullish Coalescing (`??`)
**File:** [`05-ternary-nullish-chaining.ts`](./05-ternary-nullish-chaining.ts)
### 1. Ternary Operator (`condition ? true : false`)
* **What it does:** A clean, concise replacement for simple `if/else` statements.
* **Best Practice:** Use for single-condition expressions. Avoid nesting ternary operators (e.g., `a ? b : c ? d : e`) as it destroys code readability.
---
### 2. Optional Chaining (`?.`)
* **The Problem:** In vanilla JavaScript, accessing nested properties on `null` or `undefined` throws `TypeError: Cannot read properties of undefined`, crashing the application.
* **The Solution:** Adding `?.` halts execution and immediately evaluates to `undefined` without throwing runtime errors:
  * **Nested Objects:** `user?.address?.city`
  * **Optional Methods:** `user?.printDetails?.()`
  * **Optional Arrays:** `team?.members?.[0]`
---
### 3. The Dangerous Trap: Logical OR (`||`) vs. Nullish Coalescing (`??`)
This is one of the most common sources of production bugs in modern web applications:
| Operator | Syntax | Considers Falsy / Replaces | Keeps Intact |
| :--- | :--- | :--- | :--- |
| **Logical OR** | `value \|\| fallback` | `false`, `0`, `""`, `NaN`, `null`, `undefined` | Any truthy value |
| **Nullish Coalescing** | `value ?? fallback` | **Only `null` and `undefined`** | `0`, `false`, `""`, `NaN` (Valid data) |
#### 🚨 Why `||` creates critical bugs:
* **Zero is valid data:** If a user’s bank balance or cart quantity is `0`, writing `balance || 100` mistakenly replaces `0` with `100`!
* **Empty string is valid data:** If a user intentionally clears their bio (`""`), `bio || "Default"` mistakenly restores the default text.
* **Rule:** Always use **`??` (Nullish Coalescing)** when providing fallback defaults for numbers, strings, and booleans!
---
### 4. The Production Standard Pattern: `?.` with `??`
Combining Optional Chaining with Nullish Coalescing guarantees safe traversal and a guaranteed fallback:
```typescript
const postal = user?.address?.postalCode ?? 1000;
```
* If `address` doesn't exist $\rightarrow$ safely returns `1000`.
* If `postalCode` is `undefined` $\rightarrow$ safely returns `1000`.
* If `postalCode` is `0` $\rightarrow$ correctly returns `0`.