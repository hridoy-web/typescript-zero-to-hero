// Module 02: Advanced Types
// Topic 04: Generic Constraints and the keyof Operator

// Section 01: Generic Constraints using 'extends'
// Enforces that whatever type is passed to T MUST have at least an 'id' property
interface HasId {
  id: number;
}

function printEntityId<T extends HasId>(entity: T): number {
  return entity.id;
}

const userProfile = { id: 101, name: "Hridoy", email: "hridoy@example.com" };
const orderData = { id: 9002, total: 3500 };

// console.log("01 User ID:", printEntityId(userProfile));
// console.log("01 Order ID:", printEntityId(orderData));

// printEntityId({ name: "Invalid User" }); // Error: Property 'id' is missing!


// Section 02: The 'keyof' Operator (Extracting Object Keys)
// 'keyof' extracts all keys from an object type as a literal union
type Vehicle = {
  brand: string;
  model: string;
  year: number;
};

// VehicleKeys is equivalent to: "brand" | "model" | "year"
type VehicleKeys = keyof Vehicle;

const selectedKey: VehicleKeys = "brand"; // Allowed
// const invalidKey: VehicleKeys = "color"; // Error: 'color' is not a key of Vehicle
console.log("02 Selected Vehicle Key:", selectedKey);


// Section 03: The Golden Combo -> <T, K extends keyof T>
// This ensures that the key 'K' strictly belongs to object 'T'
// T[K] is the Indexed Access Type (the exact return type of that key)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const developer = {
  name: "Hridoy Chowdhury",
  experienceYears: 2,
  isCertified: true,
};

const devName = getProperty(developer, "name"); // Inferred as string
const devYears = getProperty(developer, "experienceYears"); // Inferred as number
const devStatus = getProperty(developer, "isCertified"); // Inferred as boolean

// console.log("03 Dynamic Property Values:", devName, devYears, devStatus);

// getProperty(developer, "salary"); // Error: Argument of type '"salary"' is not assignable!


// Section 04: Safe Property Setter Pattern
function updateProperty<T, K extends keyof T>(obj: T, key: K, newValue: T[K]): T {
  return {
    ...obj,
    [key]: newValue,
  };
}

const updatedDeveloper = updateProperty(developer, "experienceYears", 3);
// console.log("04 Updated Developer:", updatedDeveloper);