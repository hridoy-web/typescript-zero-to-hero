// Module 02: Advanced TypeScript Types
// Topic 01: Type Assertion (as syntax)

// 01: Basic Type Assertion with 'unknown'

// You know the type better than TypeScript
let rawData: unknown = "Next Level Web Development";

// Without assertion, you cannot call string methods
// rawData.toUpperCase(); // Error

// With assertion using 'as'
const courseTitle = (rawData as string).toUpperCase();
// console.log("01 Course Title:", courseTitle);


// 02: Real-World Function Example (KG to Gram Converter)

// Input can be string or number, assertion helps specify return
function convertKgToGram(value: string | number): string | number | undefined {
  if (typeof value === "string") {
    const converted = parseFloat(value) * 1000;
    return `Converted weight: ${converted} gm`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
}

// When you pass a string, you know the return will be a string
const resultInString = convertKgToGram("2.5") as string;
// console.log("02 Result in String:", resultInString.toUpperCase());

// When you pass a number, you know the return will be a number
const resultInNumber = convertKgToGram(5) as number;
// console.log("02 Result in Number:", resultInNumber);


// 03: DOM Elements Type Assertion (Frontend Web Dev)

// In browser, document.getElementById returns HTMLElement | null

// Type assertion tells TS the exact element type
type CustomInput = {
   value: string 
  };
const mockInputElement = { value: "user@example.com" } as CustomInput ;
// console.log("03 Input Value:", mockInputElement.value);


// 04: The Danger of Type Assertion (No Runtime Conversion)
// Assertion only silences the compiler, it does NOT convert data at runtime
const fakeNumber = "12345" as unknown as number;

// Type is still string in JavaScript runtime!
// console.log("04 Type at Runtime:", typeof fakeNumber); // Output: string