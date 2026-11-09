// ============================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// FILE 05: TERNARY, OPTIONAL CHAINING & NULLISH COALESCING
// ============================================================================

// ----------------------------------------------------------------------------
// 01: TERNARY OPERATOR (? :) -> CLEAN ONE-LINE DECISION
// ----------------------------------------------------------------------------

const userAge: number = 20;

// Syntax: condition ? expressionIfTrue : expressionIfFalse
const accessStatus: string = userAge >= 18 ? "Adult: Access Granted" : "Minor: Access Denied";


// ----------------------------------------------------------------------------
// 02: OPTIONAL CHAINING (?.) -> CRASH-PROOF DEEP PROPERTY ACCESS
// ----------------------------------------------------------------------------

type UserAddress = {
  city: string;
  postalCode?: number; // Optional
};

type UserAccount = {
  id: string;
  name: string;
  address?: UserAddress; // Optional address
  printBio?: () => string; // Optional method
};

const registeredUser: UserAccount = {
  id: "USR-101",
  name: "Hridoy Chowdhury",
  address: {
    city: "Chittagong",
  },
};

const guestUser: UserAccount = {
  id: "USR-102",
  name: "Guest Explorer",
  // No address provided
};

// Safe Deep Access using ?. (Never crashes even if address is missing!)
const registeredCity = registeredUser.address?.city; // "Chittagong"
const guestCity = guestUser.address?.city;           // undefined (No crash!)

// Optional Method Call: Calls function ONLY if it exists
const bioOutput = registeredUser.printBio?.(); // undefined (Safely skipped)


// ----------------------------------------------------------------------------
// 03: ⚠️ THE FALSY TRAP: '||' (OR) VS '??' (NULLISH COALESCING)
// ----------------------------------------------------------------------------

// A. Real-world scenario: User's game score is actually ZERO (0)
const playerCurrentScore = 0;

// The Bug with '||' (Treats 0 as missing data! ❌)
const wrongScoreCalculation = playerCurrentScore || 10; // Output: 10 (BUG!)

// The Pro-Fix with '??' (Preserves 0 and false! ✅)
const accurateScoreCalculation = playerCurrentScore ?? 10; // Output: 0 (CORRECT)

// B. Empty string scenario
const userCustomBio = "";
const bioWithOr = userCustomBio || "Default Bio";      // "Default Bio" (Overwrote empty string)
const bioWithNullish = userCustomBio ?? "Default Bio"; // "" (Preserved user's empty string)


// ----------------------------------------------------------------------------
// 04: THE GOLDEN COMBO: OPTIONAL CHAINING + NULLISH COALESCING (?.) + (??)
// ----------------------------------------------------------------------------

// Industry Standard: Safe deep access + fallback default value in 1 line
const userPostalCode = guestUser.address?.postalCode ?? 4000; // Falls back to 4000 safely


// ----------------------------------------------------------------------------
// 05: CONSOLE OUTPUT VERIFICATION
// ----------------------------------------------------------------------------
console.log({
  accessStatus,
  registeredCity,
  guestCity,
  bioOutput,
  wrongScoreCalculation,
  accurateScoreCalculation,
  bioWithOr,
  bioWithNullish,
  userPostalCode,
});