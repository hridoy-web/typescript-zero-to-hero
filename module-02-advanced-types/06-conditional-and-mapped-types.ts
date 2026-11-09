// Module 02: Advanced Types
// Topic 06: Conditional Types and Mapped Types

// Section 01: Basic Conditional Type (Type-level if-else)
// Syntax: T extends U ? TrueType : FalseType
type IsString<T> = T extends string ? true : false;

type CheckString = IsString<string>; // Evaluates to: true
type CheckNumber = IsString<number>; // Evaluates to: false

const isTextValid: CheckString = true;
const isNumberValid: CheckNumber = false;
console.log("01 Conditional Checks:", isTextValid, isNumberValid);


// Section 02: Practical Conditional Type (Vehicle Category Filter)
type SheikhVehicle = {
  bike: string;
  car: string;
  ship: string;
};

// Check if a vehicle belongs to Sheikh's collection
type CheckProperty<T> = T extends keyof SheikhVehicle ? true : false;

type HasCar = CheckProperty<"car">; // true
type HasPlane = CheckProperty<"plane">; // false (Sheikh has no plane)
console.log("02 Has Car in Collection:", true as HasCar);


// Section 03: Basic Mapped Types (Looping over Object Keys)
// Just like Array.map() transforms values, Mapped Types transform type keys
type UserProfile = {
  username: string;
  age: number;
  isLoggedIn: boolean;
};

// Transforming all properties of an object to boolean (Form validation tracker)
type FormDirtyTracker<T> = {
  [K in keyof T]: boolean;
};

const userFormDirtyState: FormDirtyTracker<UserProfile> = {
  username: true,
  age: false,
  isLoggedIn: true,
};
console.log("03 Form Dirty State:", userFormDirtyState);


// Section 04: Advanced Mapped Types (Custom Readonly Modifier)
// How TypeScript's built-in Readonly works under the hood
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K]; // T[K] is the original property type
};

const lockedUser: MakeReadonly<UserProfile> = {
  username: "hridoy_dev",
  age: 22,
  isLoggedIn: true,
};

// lockedUser.username = "new_name"; // Error: Cannot assign to read-only property
console.log("04 Locked User:", lockedUser.username);


// Section 05: Practical Dynamic String Template Mapping
type DeviceState = {
  wifi: boolean;
  bluetooth: boolean;
};

// Dynamically prefix keys with 'get_'
type DeviceGetters = {
  [K in keyof DeviceState as `get_${K}`]: () => boolean;
};

const deviceController: DeviceGetters = {
  get_wifi: () => true,
  get_bluetooth: () => false,
};
console.log("05 Device Controller Wifi:", deviceController.get_wifi());