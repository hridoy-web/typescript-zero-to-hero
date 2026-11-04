// ==========================================
// MODULE 03: ARRAYS & TUPLES (REFERENCE TYPES)
// ==========================================

// ------------------------------------------
// 1. ARRAYS (Lists of same-type elements)
// ------------------------------------------

// Explicit Type Annotations for Arrays
let studentNames: string[] = ["Hridoy", "Rahim", "Karim"];
let subjectMarks: Array<number> = [85, 90, 95]; // Alternative generic syntax

// Type Inference for Arrays
let programmingLanguages = ["JavaScript", "TypeScript", "Python"]; // Inferred as string[]

// ✅ Allowed Operations
studentNames.push("Tanvir");          // Add new string to array
let firstStudent = studentNames[0];   // Access array element by index

// ❌ Errors (Uncomment to test)
// studentNames.push(100);            // Error: Cannot push number into string array
// subjectMarks = ["85", "90"];       // Error: Cannot assign string array to number array


// ------------------------------------------
// 2. TUPLES (Fixed-length and ordered arrays)
// ------------------------------------------

// Declaring a strict Tuple [ID, Name, IsActive]
let userRecord: [number, string, boolean] = [101, "Hridoy Chowdhury", true];

// ✅ Allowed Operations
let userId: number = userRecord[0];
let userName: string = userRecord[1];

// Common Use Case: RGB Color or Coordinates
let rgbColor: [number, number, number] = [255, 128, 0];


// ❌ Tuple Errors (Uncomment to test)
// userRecord = ["Hridoy Chowdhury", 101, true]; // Error: Type order mismatch!
// userRecord = [101, "Hridoy"];                 // Error: Missing required elements
// userRecord = [101, "Hridoy", true, "Extra"];  // Error: Exceeds fixed length


// ------------------------------------------
// 3. CONSOLE OUTPUTS
// ------------------------------------------
console.log("Student Names:", studentNames);
console.log("Subject Marks:", subjectMarks);
console.log("User Record Tuple:", userRecord);
console.log("RGB Color Tuple:", rgbColor);