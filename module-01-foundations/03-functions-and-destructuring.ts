// =====================================================================
// MODULE 01: TYPESCRIPT FOUNDATIONS
// TOPIC 03: FUNCTIONS, PARAMETERS, REST/SPREAD & DESTRUCTURING
// =====================================================================


// 01: FUNCTION PARAMETERS & RETURN TYPES (Mandatory Annotation)
// Rule: Function parameters and return types must ALWAYS have explicit annotations
function calculateTotalPrice(price: number, quantity: number): number {
    return price * quantity;
}
const total = calculateTotalPrice(800, 2); // Returns 1600
// console.log("Total Price:", total); 
// OUTPUT: Total Price: 1600

// Arrow function with explicit parameter and return type annotation
const userEmail = (email: string, domain: string): string => {
    return `${email}@${domain}`;
};
const email = userEmail('hridoy', 'nexus.com'); // Returns hridoy@nexus.com
// console.log("User Email:", email); 
// OUTPUT: User Email: hridoy@nexus.com


// 02: VOID RETURN TYPE (No Return Value)
// Used when a function performs an action but returns nothing
const logOrderDetails = (orderId: string): void => {
    console.log(`Processing Order: ${orderId}`);
    // return orderId; // Error: Type 'string' is not assignable to type 'void'
};
logOrderDetails("UUUID-4590383"); 
// OUTPUT: Processing Order: UUUID-4590383


// 03: OPTIONAL & DEFAULT PARAMETERS
// Optional parameter (?) must always be placed AFTER required parameters
function createUserProfile(name: string, role: string, age?: number): string {
    return `User: ${name}, Role: ${role}, Age: ${age ?? "Not provided"}`;
}
const userProfileData = createUserProfile('Hridoy Chowdhury', 'admin');
// console.log("User Profile:", userProfileData); 
// OUTPUT: User Profile: User: Hridoy Chowdhury, Role: admin, Age: Not provided

// Default parameter value
function calculateShipping(amount: number, discountRate: number = 0.05): number {
    return amount - (amount * discountRate);
}
const calculatePrice = calculateShipping(1000); // Returns 950
// console.log("Shipping Price:", calculatePrice); 
// OUTPUT: Shipping Price: 950


// 04: REST PARAMETERS (Handling Unlimited Arguments)
// Rest parameter (...) collects all extra arguments into a typed array
function calculateCartTotal(...prices: number[]): number {
    return prices.reduce((sum, currentPrice) => sum + currentPrice, 0);
}
const calulate = calculateCartTotal(700, 100, 600, 900, 800, 300); // Returns 3400 
// console.log("Cart Total:", calulate); 
// OUTPUT: Cart Total: 3400


// 05: SPREAD OPERATOR (...) IN ARRAYS & OBJECTS
// Spread in Arrays: Type Inference automatically handles combined types
const baseCart: string[] = ["Laptop", "Mobile", "Mouse"];
const extraItems: string[] = ["Keyboard", "Speaker", "Tablet"];
const totalItems = [...baseCart, ...extraItems]; // Inferred as string[]
// console.log("Total Items:", totalItems); 
// OUTPUT: [ 'Laptop', 'Mobile', 'Mouse', 'Keyboard', 'Speaker', 'Tablet' ]

// Spread in Objects: Cloning and updating properties cleanly
const userBase = {
    id: "UID-909",
    name: "Hridoy Chowdhury",
    role: "Mern-Stack developer",
};

const updateUser = {
    ...userBase,
    role: "Full-Stack developer", // Update Role Field
    company: "Infinity",          // New Field
    active: true,                 // New Field
};
// console.log("Updated User:", updateUser); 
// OUTPUT: { id: 'UID-909', name: 'Hridoy Chowdhury', role: 'Full-Stack developer', company: 'Infinity', active: true }


// 06: OBJECT & ARRAY DESTRUCTURING
// A. Array Destructuring with Rest (Extract first, gather rest)
const topScores: number[] = [98, 85, 72, 60, 40];
const [first, second, third, ...remainingScores] = topScores;
// console.log("Array Destructuring:", { first, second, third, remainingScores }); 
// OUTPUT: { first: 98, second: 85, third: 72, remainingScores: [ 60, 40 ] }

// B. Object Destructuring & Aliasing
type Product = {
    readonly id: string; // Not changeable only readable because readonly
    title: string;
    description?: string; // Optional Field ?
    price: number;
    inStock: boolean;
};

const product: Product = {
    id: "UID-904646",
    title: "Gaming Mouse Z-90",
    price: 900,
    inStock: true,
};

// Parameter Destructuring (React Props Pattern)
function productSummary({ title, description, price, inStock }: Product): string {
    return `${title} Price ${price} TK. Available ${inStock}`;
}

const productData = productSummary(product);
// console.log("Product Summary:", productData); 
// OUTPUT: Gaming Mouse Z-90 Price 900 TK. Available true

// ⚠️ THE ALIASING TRAP:
const title = "Global Variable";
const price = 1000;
const { title: productTitle, price: productPrice } = product; 
// Renamed with ':' to avoid conflict

// console.log("Aliased Product:", productTitle, productPrice); 
// OUTPUT: Gaming Mouse Z-90 900