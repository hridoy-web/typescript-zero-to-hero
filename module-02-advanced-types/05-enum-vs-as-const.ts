// Module 02: Advanced Types
// Topic 05: Enum vs. as const Assertion

// Section 01: Traditional Enum Pattern
// Enums compile into actual runtime JavaScript objects, adding bundle weight
enum UserRoleEnum {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function checkEnumAccess(role: UserRoleEnum): string {
  return `Access granted for role: ${role}`;
}

// console.log("01 Enum Access:", checkEnumAccess(UserRoleEnum.Admin));


// Section 02: Modern Standard -> Object with 'as const'
// 'as const' locks properties to readonly literal types and eliminates runtime overhead
const UserRoleConst = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

// console.log("02 Const Object Value:", UserRoleConst.Editor);


// Section 03: Extracting Union Types from 'as const' Object

// Step A: Extract Keys Union -> "Admin" | "Editor" | "Viewer"
type UserRoleKeys = keyof typeof UserRoleConst;

const activeKey: UserRoleKeys = "Admin";
console.log("03 Active Role Key:", activeKey);

// Step B: Extract Values Union -> "ADMIN" | "EDITOR" | "VIEWER"
type UserRoleValues = (typeof UserRoleConst)[keyof typeof UserRoleConst];

function checkConstAccess(role: UserRoleValues): string {
  return `Access granted for role: ${role}`;
}

// console.log("03 Const Access (Object):", checkConstAccess(UserRoleConst.Admin));
// console.log("03 Const Access (Direct Literal):", checkConstAccess("EDITOR"));


// Section 04: Array with 'as const' (Readonly Tuple Union)
const AllowedStatuses = ["pending", "approved", "rejected"] as const;

type Status = (typeof AllowedStatuses)[number]; // "pending" | "approved" | "rejected"

const currentStatus: Status = "approved";
// console.log("04 Array Status Value:", currentStatus);