// ========================================
// JAVASCRIPT IDENTIFIER RULES - EXAMPLES
// ========================================

console.log("===== 1. VALID IDENTIFIERS =====");

// Rule 1: Can start with letter, underscore (_), or dollar sign ($)
var firstName = "John";           // Starts with letter ✓
var _privateVar = "private";      // Starts with underscore ✓
var $jQuery = "library";          // Starts with dollar sign ✓

console.log("Starting with letter:", firstName);
console.log("Starting with underscore:", _privateVar);
console.log("Starting with dollar sign:", $jQuery);

// Rule 2: Can contain letters, digits, underscores, and dollar signs
var ab123 = 34;                   // Contains digits ✓
var user_name = "Prachi";         // Contains underscore ✓
var email2024 = "user@email.com"; // Contains digits ✓
var price$ = 100;                 // Contains dollar sign ✓

console.log("With digits:", ab123);
console.log("With underscore:", user_name);
console.log("Mixed:", email2024);

// Rule 3: Case-sensitive
var Name = "Prachi";              // Capital N
var name = "Nagpure";             // Lowercase n
var NAME = "PW";                  // All caps

console.log("Name (capital):", Name);
console.log("name (lowercase):", name);
console.log("NAME (all caps):", NAME);

console.log("\n===== 2. NAMING CONVENTIONS =====");

// camelCase - for variables and functions
var myFirstName = "Prachi";
var getUserAge = function() {
  return 25;
};
console.log("camelCase variable:", myFirstName);
console.log("camelCase function:", getUserAge.name);

// PascalCase - for classes/constructors
var User = function(name) {
  this.name = name;
};
var UserProfile = class {};
console.log("PascalCase constructor:", User.name);

// UPPER_SNAKE_CASE - for constants
var MAX_SIZE = 100;
var API_KEY = "secret123";
var PI_VALUE = 3.14159;
console.log("UPPER_SNAKE_CASE constants:", MAX_SIZE, API_KEY);

// snake_case - alternative convention
var prachi_nagpure = "Great";
var user_email = "prachi@example.com";
console.log("snake_case:", prachi_nagpure);

console.log("\n===== 3. INVALID IDENTIFIERS (COMMENTED OUT) =====");

// var 123abc = "Invalid";        // ✗ Cannot start with digit
// var my-name = "Invalid";       // ✗ Cannot contain hyphen
// var my name = "Invalid";       // ✗ Cannot contain space
// var my@name = "Invalid";       // ✗ Cannot contain @
// var if = "Invalid";            // ✗ 'if' is reserved keyword
// var function = "Invalid";      // ✗ 'function' is reserved keyword
// var class = "Invalid";         // ✗ 'class' is reserved keyword

console.log("See comments above for examples of INVALID identifiers");

console.log("\n===== 4. RESERVED KEYWORDS (CANNOT USE) =====");

var reservedKeywords = [
  "if", "else", "for", "while", "do", "switch", "case", "break",
  "continue", "function", "return", "var", "let", "const",
  "class", "extends", "new", "this", "super", "true", "false",
  "null", "undefined", "try", "catch", "finally", "throw", "typeof"
];

console.log("Reserved keywords:", reservedKeywords.join(", "));

console.log("\n===== 5. BEST PRACTICES =====");

// ✓ Good - Descriptive names
var userAge = 25;
var isActive = true;
var calculateTotal = function(price, tax) {
  return price + tax;
};

// ✓ Good - Single letter only in loops
for (var i = 0; i < 5; i++) {
  // Use 'i' for loop counter
}

// ✓ Good - Meaningful names
var getUserData = function() {
  return { name: "Prachi", age: 25 };
};

console.log("Good practice examples logged above");

console.log("\n===== 6. EXAMPLES WITH DIFFERENT PATTERNS =====");

// Pattern 1: Underscore prefix for private variables
var _internalVariable = "private";
var _protectedData = 100;

// Pattern 2: Dollar sign for special variables
var $element = "DOM element";
var $id = "unique-id-123";

// Pattern 3: Multiple underscores
var __proto__ = "prototype";
var ___double = "double underscore";

// Pattern 4: Mixed valid patterns
var user_name_2024 = "Prachi Nagpure";
var $private_data = "secret";
var _$mixed_123 = "valid identifier";

console.log("Underscore pattern:", _internalVariable);
console.log("Dollar pattern:", $element);
console.log("Mixed pattern:", user_name_2024);

console.log("\n===== ALL EXAMPLES COMPLETED =====");
