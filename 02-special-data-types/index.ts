// MODULE 02: SPECIAL DATA TYPES IN TYPESCRIPT

// ------------------------------------------
// 1. ANY (Turns off TypeScript safety)
// ------------------------------------------
let randomValue: any = "TypeScript";
randomValue = 100;     // ✅ Allowed
randomValue = true;    // ✅ Allowed

// ❌ Dangerous: TS won't catch errors on 'any' types
// randomValue.toUpperCase(); // Can cause runtime error if it's a number!

console.log("Any Type Value:", randomValue);


// ------------------------------------------
// 2. UNKNOWN (The safer version of 'any')
// ------------------------------------------
let userInput: unknown = "Hridoy Chowdhury";
userInput = 500;       // ✅ Allowed to assign anything

// ❌ Error: Cannot use unknown variable directly without checking type
// let result = userInput.toUpperCase(); 

// ✅ Correct Way: Type Narrowing (Checking type before use)
if (typeof userInput === "string") {
  let upperText = userInput.toUpperCase();
  console.log("Unknown Safe String:", upperText);
}


// ------------------------------------------
// 3. VOID (Functions with no return value)
// ------------------------------------------
function logUserDetails(name: string, age: number): void {
  console.log(`User Name: ${name}, Age: ${age}`);
  // This function performs an action but returns nothing
}

logUserDetails("Hridoy", 22);


// ------------------------------------------
// 4. NEVER (Functions that never return normally)
// ------------------------------------------
function handleAppError(errorMsg: string): never {
  throw new Error(errorMsg); // Throws an error and stops execution completely
}

// handleAppError("Something went wrong!"); // Uncomment to test error throwing