var v =10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // This is allowed with var "Redeclaration"
browser = "Safari"; // This is allowed with var "Reassignment"

//for, functions

var testCases = ["login", "logout", "signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log("Running test case:", testCases[i]);
}

console.log("Value of i after loop:", i); // i is accessible here due to var's function scope

