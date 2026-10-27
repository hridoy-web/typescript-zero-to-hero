// ==========================================
// MODULE 01: PRIMITIVE DATA TYPES & INFERENCE
// ==========================================

// ------------------------------------------
// 1. TYPE INFERENCE VS TYPE ANNOTATION
// ------------------------------------------

// Type Inference (TS guesses type automatically)
let inferredString = "TypeScript is awesome!"; // Inferred as 'string'
let inferredNumber = 100;                     // Inferred as 'number'

console.log("Inferred Text:", inferredString);
console.log("Inferred Number:", inferredNumber);

// Type Annotation (Manual type declaration)
let explicitString: string = "Hello World";
let explicitNumber: number = 42;


// ------------------------------------------
// 2. BASIC PRIMITIVE TYPES (SIMPLE EXAMPLES)
// ------------------------------------------

// 1. String: Text values
let developerName: string = "Hridoy Chowdhury";
let greeting: string = `Hello, my name is ${developerName}`;

greeting = greeting.toUpperCase(); // ✅ Allowed
// greeting = 100;                 // ❌ Error: Cannot assign number to string

console.log("Developer Name:", developerName);
console.log("Greeting:", greeting);

// 2. Number: Integers and decimals
let age: number = 22;
let rating: number = 4.9;
let nextAge = age + 1;             // ✅ Allowed: Math calculation
// age = "22";                     // ❌ Error: Cannot assign string to number

console.log("Age:", age);
console.log("Rating:", rating);
console.log("Next Age:", nextAge);

// 3. Boolean: True or false
let isStudent: boolean = true;
let hasCompletedCourse: boolean = false;
let canAccess = isStudent && true; // ✅ Allowed: Logical operation
// isStudent = "true";             // ❌ Error: String is not boolean

console.log("Is Student:", isStudent);
console.log("Can Access:", canAccess);

// 4. Null: Intentionally empty value
let emptyData: null = null;
// emptyData = "Data";             // ❌ Error: Strict null cannot hold a string

console.log("Empty Data:", emptyData);

// 5. Undefined: Value not assigned yet
let notAssignedYet: undefined = undefined;
// notAssignedYet = 50;            // ❌ Error: Strict undefined cannot hold a number

console.log("Not Assigned Yet:", notAssignedYet);

// 6. BigInt: Extremely large integers (ends with 'n')
let bigNumber: bigint = 9007199254740991n;
let nextBigNum = bigNumber + 1n;   // ✅ Allowed between bigints
// let wrongSum = bigNumber + 50;  // ❌ Error: Cannot mix BigInt and normal number

console.log("BigInt:", bigNumber);
console.log("Next BigInt:", nextBigNum);

// 7. Symbol: Always unique identifier
let uniqueId1: symbol = Symbol("id");
let uniqueId2: symbol = Symbol("id"); // uniqueId1 !== uniqueId2

console.log("Symbol Unique Check:", uniqueId1 === uniqueId2); // Output: false


// ------------------------------------------
// 3. REAL-WORLD USAGE: UNION TYPES
// ------------------------------------------
// In real projects, null or undefined are used with Union Types (|)

// String or Null (Initially empty, loaded later)
let userProfileImage: string | null = null;
userProfileImage = "https://example.com/avatar.jpg"; // ✅ Reassigned to string

// Number or Undefined (Optional value)
let userScore: number | undefined;
userScore = 95; // ✅ Reassigned to number

// String or Number (Flexible ID)
let userId: string | number = 101;
userId = "USR-101"; // ✅ Reassigned to string

console.log("User Profile Image:", userProfileImage);
console.log("User Score:", userScore);
console.log("User ID:", userId);