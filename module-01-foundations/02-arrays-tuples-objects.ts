// ============================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// TOPIC 02: ARRAYS, TUPLES, OBJECTS, READONLY & LITERAL TYPES
// ============================================================================

// 01: ARRAYS (Flexible Collection of Data)
const cartItems = ["Laptop", "Mouse", "Keyboard"]; // Type Inference
// cartItems.push(900); // Error: type mismatch

const productPrices: number[] = []; // Explicit annotation for empty array
productPrices.push(900, 99, 6000); // Allowed
// productPrices.push("Hridoy"); // Error: type mismatch

const mixData = [800, "Hridoy"]; // Inferred union array type
const data: (string | number)[] = []; // Explicit union array
data.push(8000, "Hridoy", 900); // Allowed

// Practical array for feature flags (boolean values)
const featureFlags: boolean[] = [true, false, true]; 


// 02: TUPLES (Strict Length & Strict Order)
let userLocation: [number, string] = [23.8103, "Chittagong"]; // Standard tuple
userLocation.push("Dhaka"); // Note: TS allows push on normal tuples

const userData: readonly [number, string] = [988, "Arnab"]; // Immutable tuple
// userData.push(1000); // Error: readonly tuple blocks push

// Practical tuple for ID and active status pair
const userStatusTuple: [number, boolean] = [101, true];


// 03: LITERAL TYPES (Exact Values as Types)
let orderStatus: "pending" | "processing" | "shipped"; // Literal options
orderStatus = "pending"; // Allowed
// orderStatus = "delivered"; // Error: not in allowed list


// 04: OBJECT TYPES, OPTIONAL (?) & READONLY PROPERTIES
const userProfile: {
  readonly id: string; // Immutable primary id
  username: string; // Required name
  email: string; // Required email
  age?: number; // Optional property
  role: "admin" | "customer"; // Strict role options
} = {
  id: "UID-2026-999",
  username: "Hridoy Chowdhury",
  email: "hridoy@example.com",
  role: "admin",
};

// userProfile.id = "uuid-999"; // Error: readonly property
userProfile.username = "Arnab"; // Allowed modification


// 05: CONSOLE OUTPUT
console.log({
  cartItems,
  productPrices,
  data,
  featureFlags,
  userLocation,
  userData,
  userStatusTuple,
  orderStatus,
  userProfile,
});