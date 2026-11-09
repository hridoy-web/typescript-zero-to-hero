// ============================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// TOPIC 06: SPECIAL TYPES (Unknown, Never, Void & Nullable Types)
// ============================================================================

// ----------------------------------------------------------------------------
// 01: 'unknown' TYPE -> THE TYPE-SAFE ALTERNATIVE TO 'any'
// ----------------------------------------------------------------------------

// A. 'any' disables all checks (Dangerous - kills TypeScript benefits)
let flexibleAny: any = "Hridoy";
flexibleAny.toUpperCase(); // Risky: could crash if it becomes a number!
// console.log(flexibleAny);

// B. 'unknown' forces type checking before usage (100% Safe)
let dynamicInput: unknown = 42;
dynamicInput = "Hridoy Chowdhury"; // Value reassignment is allowed

// dynamicInput.toUpperCase(); // ❌ Compiler blocks this! Must check type first!

// Type Narrowing (Checking type before using)
if (typeof dynamicInput === "string") {
  const upperName = dynamicInput.toUpperCase(); // ✅ Safe: TS knows it is a string
  console.log("Narrowed String:", upperName);
}


// ----------------------------------------------------------------------------
// 02: 'void' VS 'never' (The Finisher vs The Black Hole)
// ----------------------------------------------------------------------------

// A. 'void': Runs to completion successfully, but returns nothing
function logUserAction(action: string): void {
  console.log(`[ACTION LOG]: User performed -> ${action}`);
  // Function exits normally
}
// logUserAction("Hridoy")

// B. 'never': NEVER reaches normal completion (Halt/Crash)
function throwSystemError(message: string): never {
  throw new Error(`CRITICAL SYSTEM FAILURE: ${message}`);
}
// throwSystemError("Warning")

// C. Infinite loop also has return type 'never'
function runEventLoop(): never {
  while (true) {
    // Never exits
  }
}


// ----------------------------------------------------------------------------
// 03: 🌟 SENIOR PATTERN: EXHAUSTIVE CHECK WITH 'never'
// ----------------------------------------------------------------------------

type UserRole = "admin" | "editor";

function redirectUserByRole(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Redirecting to Admin Dashboard...";
    case "editor":
      return "Redirecting to Editor Panel...";
    default:
      // If someone adds "superadmin" to UserRole in the future,
      // TypeScript will immediately show a compile error right here!
      const exhaustiveCheck: never = role;
      return exhaustiveCheck;

  }
}

// ----------------------------------------------------------------------------
// 04: NULLABLE TYPES -> SAFE GUARD CLAUSES
// ----------------------------------------------------------------------------

function getUserSearchQuery(keyword: string | null): string {
  // Guard clause to handle null safely
  if (keyword === null) {
    return "No search query provided.";
  }
  return `Searching database for: ${keyword.trim().toLowerCase()}`;
}


// ----------------------------------------------------------------------------
// 05: CONSOLE OUTPUT VERIFICATION
// ----------------------------------------------------------------------------
console.log({
  redirection: redirectUserByRole("admin"),
  searchText: getUserSearchQuery("TypeScript Foundations"),
  searchNull: getUserSearchQuery(null),
});