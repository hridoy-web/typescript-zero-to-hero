# 🚀 Module 02: Advanced TypeScript Types
A comprehensive production handbook covering Generics, Type Assertions, Interfaces, Utility Types, and Advanced Type Modeling.
---
## 📌 Topic 01: Type Assertion (`as` syntax)
**File:** [`01-type-assertion.ts`](./01-type-assertion.ts)
### 1. What is Type Assertion?
* **Definition:** Type assertion is a way to tell the TypeScript compiler: *"Trust me, I know the exact type of this variable better than you do."*
* **Syntax:** We use the `as` keyword (e.g., `value as string`).
---
### 2. Common Real-World Use Cases
1. **Handling `unknown` or `any` Data:** When fetching data from an API or reading third-party library values.
2. **Narrowing Return Types:** When a function returns a union type (`string | number`), but based on your input you already know the exact return type.
3. **DOM Manipulation:** In frontend code, `document.getElementById("email")` returns generic `HTMLElement | null`. Using `as HTMLInputElement` allows direct access to `.value`.
---
### 📊 Type Assertion Quick Reference
| Feature | Type Assertion (`as`) | Type Casting (Runtime) |
| :--- | :--- | :--- |
| **When it runs** | Compile-Time only | Runtime |
| **Does it change data?** | No, data stays identical | Yes (e.g., `Number("100")` turns string into number) |
| **Risk Factor** | Can cause runtime errors if used wrongly | Safe if validated |
---
### 🧠 Key Takeaways & Gotchas
* **⚠️ Type Assertion does NOT convert values:** Writing `"hello" as number` will not turn text into a number. The JavaScript runtime will still see it as a string.
* **Double Assertion (`as unknown as Target`):** If two types have zero overlap, TypeScript blocks direct assertion. You must assert to `unknown` first, though this should be avoided unless strictly necessary.

---

## 📌 Topic 02: Interface vs. Type Alias
**File:** [`02-interface-vs-type-alias.ts`](./02-interface-vs-type-alias.ts)
### 1. Master Comparison Matrix
| Feature | Type Alias (`type`) | Interface (`interface`) |
| :--- | :--- | :--- |
| **Primary Role** | Can define primitives, unions, tuples, functions, objects | Exclusively used to model **Object shapes & Class contracts** |
| **Inheritance Syntax** | Intersection operator (`&`) | `extends` keyword |
| **Declaration Merging** | ❌ No (Throws duplicate identifier error) | ✅ **Yes** (Same name interfaces automatically merge) |
| **Union & Primitives** | ✅ Can alias `string \| number` | ❌ Cannot define raw primitive unions |
| **Performance** | Slightly slower on large complex unions | Compiler optimizes interfaces faster in object trees |
---
### 2. What is Declaration Merging?
If you declare an interface with the same name multiple times, TypeScript merges their definitions into one single interface:
```typescript
interface Cart {
  item: string;
}
interface Cart {
  price: number;
}
// Resulting Cart has BOTH 'item' and 'price'
```
* **Real-World Role:** Heavily used when extending third-party Express.js `Request` objects to attach custom properties like `req.user`.
---
### 3. The Senior Engineering Rule of Thumb
* Use **`interface`** when defining **Objects, React Component Props, or OOP Class structures**.
* Use **`type`** when defining **Unions, Primitives, Tuples, or Complex Utility calculations**.