// ============================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// FILE 04: TYPE ALIAS, UNION (|) & INTERSECTION (&)
// ============================================================================

// ----------------------------------------------------------------------------
// 01: TYPE ALIAS (DRY Principle - Custom Reusable Names)
// ----------------------------------------------------------------------------

// A. Type Alias for Primitives & Unions
type ID = string | number;
type UserRole = "admin" | "editor" | "customer";

// B. Type Alias for Objects
type UserProfile = {
  id: ID;
  username: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};

const customer: UserProfile = {
  id: "USR-9920",
  username: "hridoy_dev",
  email: "hridoy@example.com",
  role: "customer",
  isActive: true,
};
// console.log("01. Customer Profile:", customer);
// OUTPUT: 
// 01. Customer Profile: {
//   id: 'USR-9920',
//   username: 'hridoy_dev',
//   email: 'hridoy@example.com',
//   role: 'customer',
//   isActive: true
// }

// C. Type Alias for Functions (Function Blueprint)
type MathOperation = (firstNum: number, secondNum: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

// console.log("Math Addition:", add(20, 30)); 
// OUTPUT: Math Addition: 50

// console.log("Math Multiplication:", multiply(5, 6)); 
// OUTPUT: Math Multiplication: 30


// ----------------------------------------------------------------------------
// 02: UNION TYPES (|) -> LOGICAL "OR" (One or the other)
// ----------------------------------------------------------------------------

// A. Literal Union: Strictly locks values to prevent silent typo bugs
type PaymentGateway = "BKASH" | "NAGAD" | "ROCKET" | "CREDIT_CARD";

let selectedGateway: PaymentGateway = "BKASH";
// selectedGateway = "PAYPAL"; // Error: Type '"PAYPAL"' is not assignable to type 'PaymentGateway'
// console.log("Selected Payment Gateway:", selectedGateway);
// OUTPUT: Selected Payment Gateway: BKASH

// B. Discriminated Union (Pro-Pattern for API responses)
type SuccessResponse = {
  status: "success"; // Discriminant property
  data: string[];
};

type ErrorResponse = {
  status: "error";   // Discriminant property
  errorMessage: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(response: ApiResponse): string {
  // TypeScript checks the 'status' property to safely narrow down types
  if (response.status === "success") {
    return `Loaded ${response.data.length} items successfully.`;
  } else {
    return `Request failed with error: ${response.errorMessage}`;
  }
}

const apiSuccessResult = handleApiResponse({ status: "success", data: ["Laptop", "Keyboard"] });
// console.log("API Success Handled:", apiSuccessResult);
// OUTPUT: API Success Handled: Loaded 2 items successfully.

const apiErrorResult = handleApiResponse({ status: "error", errorMessage: "Unauthorized access" });
// console.log("API Error Handled:", apiErrorResult);
// OUTPUT: API Error Handled: Request failed with error: Unauthorized access


// ----------------------------------------------------------------------------
// 03: INTERSECTION TYPES (&) -> LOGICAL "AND" (Combining Types)
// ----------------------------------------------------------------------------

// Base Type 1: Common Audit Timestamps (Standard database entity pattern)
type BaseEntity = {
  readonly id: string;
  createdAt: string;
};

// Base Type 2: Business Info
type EmployeeDetails = {
  name: string;
  salary: number;
  department: string;
};

// Base Type 3: Security Permissions
type AdminPrivileges = {
  hasDatabaseAccess: boolean;
  canDeleteUsers: boolean;
};

// Intersection: SystemAdministrator must have ALL properties from all 3 types!
type SystemAdministrator = BaseEntity & EmployeeDetails & AdminPrivileges;

const leadDev: SystemAdministrator = {
  id: "ADMIN-001",
  createdAt: "2026-11-07",
  name: "Hridoy Chowdhury",
  salary: 95000,
  department: "Infrastructure",
  hasDatabaseAccess: true,
  canDeleteUsers: true,
};

// console.log("System Administrator Profile:", leadDev);
// OUTPUT: 
// System Administrator Profile: {
//   id: 'ADMIN-001',
//   createdAt: '2026-11-07',
//   name: 'Hridoy Chowdhury',
//   salary: 95000,
//   department: 'Infrastructure',
//   hasDatabaseAccess: true,
//   canDeleteUsers: true
// }


// ----------------------------------------------------------------------------
// 04: ⚠️ THE IMPOSSIBLE INTERSECTION GOTCHA ('never' Type)
// ----------------------------------------------------------------------------

type StringID = { id: string };
type NumberID = { id: number };

// Conflicting types collapse into 'never'
type ImpossibleIntersection = StringID & NumberID;

// const invalidObject: ImpossibleIntersection = {
//   id: "101", // Error: Type 'string' is not assignable to type 'never'!
// };