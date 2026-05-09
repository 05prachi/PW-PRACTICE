// ============================================
// JAVASCRIPT NAMING CONVENTIONS - ALL CASES
// ============================================

console.log("=== NAMING CONVENTIONS IN JAVASCRIPT ===\n");

// 1. CAMEL CASE (camelCase)
// =========================
console.log("1. CAMEL CASE - First word lowercase, rest capitalized");
let firstName = "Prachi";
let lastName = "Nagpure";
let userAge = 25;
let isActive = true;
let getTotalPrice = function() { return 100; };

function calculateTotalAmount() {
    return 500;
}

const myVariableName = "camelCase example";
console.log(firstName, lastName, userAge);
console.log(myVariableName);
console.log("");


// 2. PASCAL CASE / PascalCase (UpperCamelCase)
// =============================================
console.log("2. PASCAL CASE - All words capitalized (Used for Classes)");
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}

class StudentData {
    constructor(rollNo) {
        this.rollNo = rollNo;
    }
}

const UserObject = {
    name: "John"
};

function CalculateSum(a, b) {
    return a + b;
}

const MyCustomClass = UserProfile;
console.log("Classes/Constructors: UserProfile, StudentData");
console.log("");


// 3. SNAKE CASE (snake_case)
// ==========================
console.log("3. SNAKE CASE - All lowercase with underscores");
let first_name = "Prachi";
let last_name = "Nagpure";
let user_age = 25;
let is_active = true;
let total_number_of_items = 50;

function get_user_details() {
    return "user details";
}

const database_connection_url = "https://db.example.com";
console.log(first_name, last_name, user_age);
console.log(total_number_of_items);
console.log("");


// 4. SCREAMING SNAKE CASE (SCREAMING_SNAKE_CASE)
// ===============================================
console.log("4. SCREAMING SNAKE CASE - All UPPERCASE with underscores (Constants)");
const MAX_SIZE = 100;
const MIN_VALUE = 0;
const API_KEY = "your-api-key-here";
const DATABASE_HOST = "localhost";
const PORT_NUMBER = 3000;
const DEFAULT_TIMEOUT = 5000;
const ALLOWED_COUNTRIES = ["USA", "UK", "Canada"];

console.log("MAX_SIZE:", MAX_SIZE);
console.log("API_KEY:", API_KEY);
console.log("PORT_NUMBER:", PORT_NUMBER);
console.log("");


// 5. KEBAB CASE (kebab-case)
// ===========================
console.log("5. KEBAB CASE - All lowercase with hyphens (Not valid for JS variables, used in HTML/CSS)");
// Note: Cannot be used for variable names directly in JavaScript
// But used in HTML attributes, CSS classes, and IDs
// Examples in context (as comments):
// <div class="user-profile-card"></div>
// <input data-user-name="John" />
// CSS: .user-profile { color: blue; }

// Alternatively stored as strings:
let htmlClasses = "user-profile-card";
let cssClassName = "button-primary-large";
console.log("Used in HTML/CSS: user-profile-card, button-primary-large");
console.log("");


// 6. FLAT CASE (flatcase)
// ========================
console.log("6. FLAT CASE - All lowercase, no separators");
let firstname = "Prachi";
let lastname = "Nagpure";
let userage = 25;
let databasename = "myapp";

function getusername() {
    return "username";
}

console.log(firstname, lastname);
console.log("");


// 7. SCREAMING KEBAB CASE (SCREAMING-KEBAB-CASE)
// ================================================
console.log("7. SCREAMING KEBAB CASE - All UPPERCASE with hyphens (HTML attributes)");
// Used in HTML5 data attributes and CSS
// Examples in context:
// <div data-max-length="100"></div>
// <input data-min-value="0" />

let attributeNames = "MAX-LENGTH, MIN-VALUE, USER-ID";
console.log("Used in HTML attributes:", attributeNames);
console.log("");


// 8. TRAIN CASE (Train-Case)
// ===========================
console.log("8. TRAIN CASE - Each word capitalized with hyphens");
let Train_Case_Example = "Each-Word-Capitalized";
let User_Profile_Data = "User-Data";
console.log("Example: User-Profile-Data");
console.log("");


// 9. MIXED NAMING IN REAL CODE
// =============================
console.log("9. MIXED NAMING - All conventions in one example");

class UserManager {  // PascalCase for class
    constructor(firstName, lastName) {  // camelCase for parameters
        this.firstName = firstName;  // camelCase for properties
        this.lastName = lastName;
        this.MAX_ATTEMPTS = 3;  // SCREAMING_SNAKE_CASE for constants
        this._privateVar = "private";  // Convention: _ prefix for private
        this.publicMethod();
    }

    getFullName() {  // camelCase for method
        return `${this.firstName} ${this.lastName}`;
    }

    _helperMethod() {  // Private method convention
        return "helper";
    }
}

const user_manager = new UserManager("Prachi", "Nagpure");  // Variable in snake_case
console.log(user_manager.getFullName());
console.log("");


// 10. COMPARISON TABLE
// ====================
console.log("10. COMPARISON TABLE");
console.log("==================");
console.log("camelCase          -> myVariableName (variables, functions)");
console.log("PascalCase         -> MyClassName (classes, constructors)");
console.log("snake_case         -> my_variable_name (rarely used in JS)");
console.log("SCREAMING_CASE     -> MAX_VALUE (constants)");
console.log("kebab-case         -> my-variable-name (HTML/CSS, not JS vars)");
console.log("flatcase           -> myvariablename (rarely used)");
console.log("_private           -> _privateVar (private members convention)");
console.log("__dunder__         -> __init__ (special/magic methods)");
console.log("");


// 11. BEST PRACTICES FOR JAVASCRIPT
// ==================================
console.log("11. JAVASCRIPT BEST PRACTICES");
console.log("=============================");

// ✓ GOOD EXAMPLES
const MAX_USERS = 100;  // Constants in SCREAMING_SNAKE_CASE
let userName = "Prachi";  // Variables in camelCase
function calculateTotal() {}  // Functions in camelCase
class UserProfile {}  // Classes in PascalCase

// ✗ AVOID
// const max_users = 100;  // Don't use snake_case for constants
// let UserName = "Prachi";  // Don't use PascalCase for variables
// function calculate_total() {}  // Don't use snake_case for functions
// let isValid_orNot = true;  // Don't mix conventions

console.log("\nBest Practice Summary:");
console.log("- Use camelCase for variables, functions, and methods");
console.log("- Use PascalCase for classes and constructors");
console.log("- Use SCREAMING_SNAKE_CASE for constants");
console.log("- Use _prefix for private members (by convention)");
console.log("- Be consistent throughout your project");
console.log("- Avoid mixing different conventions");
