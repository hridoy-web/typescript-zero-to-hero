// ============================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// TOPIC 05: TERNARY, NULLISH COALESCING (??) & OPTIONAL CHAINING (?.)
// ============================================================================

// ----------------------------------------------------------------------------
// 01: TERNARY OPERATOR (Inline If-Else Short-Hand)
// ----------------------------------------------------------------------------

const userScore: number = 85;
const passingScore: number = 50;

// Clean inline condition check
const examResult: string = userScore >= passingScore ? "Passed with honors" : "Failed";
console.log("Exam Status:", examResult);
// OUTPUT: Exam Status: Passed with honors


// ----------------------------------------------------------------------------
// 02: NULLISH COALESCING OPERATOR (??) vs LOGICAL OR (||)
// ----------------------------------------------------------------------------

// A. The problem with || (Treats 0, "", false as falsy)
const userAttempts: number = 0; 
const fallbackAttempts = userAttempts || 3; // Bug: Returns 3 because 0 is falsy!
// console.log("Logical OR Bug:", fallbackAttempts);
// OUTPUT: Logical OR Bug: 3

// B. The safety of ?? (Only triggers on null or undefined)
const safeAttempts = userAttempts ?? 3; // Correct: Returns 0 because 0 is valid
// console.log("Safe Attempts:", safeAttempts);
// OUTPUT: Safe Attempts: 0

type UserSettings = {
  theme?: string;
  maxLimit?: number;
};

const clientSettings: UserSettings = {
  theme: "", // Empty string is intentional
  maxLimit: 0, // Zero is a valid limit
};

// Safe fallback without overriding intentional 0 or empty strings
const activeTheme = clientSettings.theme ?? "dark-mode";
const limitValue = clientSettings.maxLimit ?? 10;
// console.log("Client Settings:", { activeTheme, limitValue });
// OUTPUT: Client Settings: { activeTheme: '', limitValue: 0 }


// ----------------------------------------------------------------------------
// 03: OPTIONAL CHAINING (?.) (Safe Nested Property Access)
// ----------------------------------------------------------------------------

type UserProfile = {
  id: string;
  name: string;
  address?: {
    city: string;
    postalCode?: number;
  };
  getPermissions?: () => string[];
};

const guestUser: UserProfile = {
  id: "GUEST-99",
  name: "Hridoy Chowdhury",
  // address is completely missing!
};

// Safely access nested properties without runtime TypeError crashes
const userCity = guestUser.address?.city; // Returns undefined instead of throwing error
// console.log("User City:", userCity);
// OUTPUT: User City: undefined

const userPostal = guestUser.address?.postalCode ?? 8900; // Fallback with nullish coalescing
// console.log("User Postal:", userPostal);
// OUTPUT: User Postal: 8900

// Safely execute optional methods
const permissions = guestUser.getPermissions?.() ?? ["READ_ONLY"];
console.log("Permissions:", permissions);
// OUTPUT: Permissions: [ 'READ_ONLY' ]