// Module 02: Advanced Types
// Topic 03: Generics Mental Model and Best Practices

// Section 01: Basic Generic Function with Single Type Parameter (<T>)
// T stands for Type. It acts as a dynamic type placeholder.
function identity<T>(value: T): T {
  return value;
}

const stringValue = identity<string>("TypeScript Generics");
// console.log("01 String Value:", stringValue);

const numberValue = identity<number>(2026);
// console.log("01 Number Value:", numberValue);


// Section 02: Generic Interface Blueprint (API Wrapper Pattern)
// We use 'interface' for concrete object models and generic wrappers.
interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  price: number;
}

// ApiResponse takes <T> so it can wrap any data model dynamically
interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

// Reusing ApiResponse for User model
const userResponse: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  message: "User fetched successfully",
  data: { id: 101, name: "Hridoy" },
};
// console.log("02 User Name:", userResponse.data.name);

// Reusing the exact same ApiResponse for Product model
const productResponse: ApiResponse<Product> = {
  statusCode: 200,
  success: true,
  message: "Product loaded successfully",
  data: { sku: "MAC-BOOK-M3", price: 1999 },
};
// console.log("02 Product SKU:", productResponse.data.sku);


// Section 03: Multiple Type Parameters (<T, U> or <K, V>)
// K represents Key, V represents Value
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const sessionConfig: KeyValuePair<string, boolean> = {
  key: "isLoggedIn",
  value: true,
};
// console.log("03 Session Config:", sessionConfig);