// Module 02: Advanced Types
// Topic 07: TypeScript Built-in Utility Types

// Base Interface for all examples
interface UserProfile {
  id: number;
  name: string;
  email: string;
  contactNo?: string; // Optional field
  role: string;
}

// 01: Pick<T, Keys> -> Selects only specific keys from an existing type
type UserContactInfo = Pick<UserProfile, "name" | "email">;

const contactCard: UserContactInfo = {
  name: "Hridoy Chowdhury",
  email: "hridoy@example.com",
};
// console.log("01 Pick (Contact Info):", contactCard);


// 02: Omit<T, Keys> -> Removes specific keys from an existing type
// Perfect for removing sensitive data like passwords or tokens
type PublicUserProfile = Omit<UserProfile, "contactNo" | "role">;

const publicProfile: PublicUserProfile = {
  id: 101,
  name: "Arnab",
  email: "arnab@example.com",
};
// console.log("02 Omit (Public Profile):", publicProfile);


// 03: Partial<T> -> Makes ALL properties optional
// Essential for PATCH API updates where user might only update one field
type UserUpdatePayload = Partial<UserProfile>;

const updateNameOnly: UserUpdatePayload = {
  name: "Hridoy C.", // All other fields are optional
};
// console.log("03 Partial (Update Payload):", updateNameOnly);


// 04: Required<T> -> Makes ALL properties mandatory
// Converts optional fields like contactNo into strictly required
type StrictUserProfile = Required<UserProfile>;

const fullyCompleteUser: StrictUserProfile = {
  id: 102,
  name: "Sakib",
  email: "sakib@example.com",
  contactNo: "+8801700000000", // Now required!
  role: "admin",
};
// console.log("04 Required (Strict User):", fullyCompleteUser.contactNo);


// 05: Readonly<T> -> Makes ALL properties immutable (read-only)
type FrozenUser = Readonly<UserProfile>;

const immutableUser: FrozenUser = {
  id: 201,
  name: "Tamim",
  email: "tamim@example.com",
  role: "customer",
};

// immutableUser.name = "Tamim Iqbal"; // Error: Cannot assign to read-only property
// console.log("05 Readonly (Immutable User):", immutableUser.name);


// 06: Record<Keys, Values> -> Dynamic Key-Value Map/Dictionary
type RoleLevel = "admin" | "editor" | "guest";

type UserRoleMap = Record<RoleLevel, string>;

const rolePermissions: UserRoleMap = {
  admin: "Full Database Access",
  editor: "Can Edit Content",
  guest: "View Only Access",
};

// console.log("06 Record (Role Permissions):", rolePermissions.admin);