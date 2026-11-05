// Module 01: TypeScript Foundations
// Topic 01: Type Inference, Type Annotation, and 7 Primitive Types

/**
 * OVERVIEW: The 7 Primitive Types in TypeScript:
 * 1. string    -> Text data
 * 2. number    -> All numbers (integer & decimal)
 * 3. boolean   -> true / false
 * 4. null      -> Intentionally empty value
 * 5. undefined -> Value not assigned yet
 * 6. bigint    -> Extremely large numbers (rarely used)
 * 7. symbol    -> 100% unique identifier (rarely used)
 */

// 01: Type Inference: TS auto detects type
let shopName = "NexUs";
let deliveryFee = 130;
// deliveryFee = "Hridoy"; // Error: string not assignable to number

// 02: Type Annotation: Manually defining the type
const userName: string = "Hridoy Chowdhury";
const isPaid: boolean = true;
const itemPrice: number = 399.50;
// const price: number = "1800"; // Error: string not assignable to number

// 03: Explicit Annotation: Declare now, assign value later
let orderId: string;
orderId = "ORD-2026-01";
// orderId = 8000; // Error: number not assignable to string

// 04: Null (Empty) vs Undefined (Not Set)
const discount: null = null;
const referBonus: undefined = undefined;
// const wrongEmpty: null = undefined; // Error: undefined not assignable to null

// 05: BigInt: Rarely used for huge numbers
const spaceDistance: bigint = 89999000074732049447n; // Must add 'n' at end
// console.log(typeof spaceDistance); // Output: "bigint"
// const invalidMix = spaceDistance + 700; // Error: cannot mix bigint and number

// 06: Symbol: Rarely used for unique keys
const secretKeyOne: symbol = Symbol("app_key");
const secretKeyTwo: symbol = Symbol("app_key");
const isSameKey: boolean = secretKeyOne === secretKeyTwo;
// console.log(isSameKey); // Output: false

console.log({
  shopName,
  deliveryFee,
  userName,
  isPaid,
  itemPrice,
  orderId,
  discount,
  referBonus,
  spaceDistance,
  isSameKey,
});