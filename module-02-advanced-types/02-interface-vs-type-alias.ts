// Module 02: Advanced TypeScript Types
// Topic 02: Interface vs Type Alias

// 01: Defining Object Shapes (Both work similarly)
type UserType = {
  id: number;
  name: string;
};

interface UserInterface {
  id: number;
  name: string;
}

const userA: UserType = {
     id: 101,
     name: "Hridoy"
     };

const userB: UserInterface = {
     id: 102,
     name: "Arnab" };

// console.log("01 Objects:", userA, userB);


// 02: Extending / Inheritance

// Type uses intersection (&), Interface uses 'extends'
type EmployeeType = UserType & {
  salary: number;
};

interface EmployeeInterface extends UserInterface {
  salary: number;
}

const staffOne: EmployeeType = { id: 201, name: "Sakib", salary: 50000 };
const staffTwo: EmployeeInterface = { id: 202, name: "Tamim", salary: 65000 };
// console.log("02 Extended Staff:", staffOne, staffTwo);


// 03: Declaration Merging (Unique to Interface)

// Multiple interfaces with same name will auto-merge together
interface Developer {
  name: string;
  primaryLanguage: string;
}

interface Developer {
  yearsOfExperience: number;
  isActive: true | false
}

interface Developer {
    Skill: string[];
}

// Developer interface now has all 3 properties
const leadDev: Developer = {
  name: "Hridoy Chowdhury",
  primaryLanguage: "TypeScript",
  yearsOfExperience: 2,
  isActive: true,
  Skill: ["JS", "TS", "NEXT.JS"]
};
console.log("03 Merged Developer:", leadDev);

// Note: Type Alias cannot do this. Writing 'type Dev = ...' twice throws duplicate error!


// 04: Typing Functions (Both can type functions)
type AddNumbersType = (a: number, b: number) => number;

interface AddNumbersInterface {
  (a: number, b: number): number;
}

const addWithType: AddNumbersType = (x, y) => x + y;
const addWithInterface: AddNumbersInterface = (x, y) => x + y;

// console.log("04 Function Calls:", addWithType(10, 20), addWithInterface(30, 40));


// 05: Typing Arrays (Both can type arrays)
type NumberListType = number[];

interface NumberListInterface {
  [index: number]: number;
}

const listA: NumberListType = [1, 2, 3];
const listB: NumberListInterface = [4, 5, 6];

// console.log("05 Array Lists:", listA, listB);