# PW Practice

This repository contains JavaScript practice examples organized by chapter and topic.

## Repository Structure

- `chapter_01_basics/` - Basic JavaScript examples and setup verification.
- `chapter_02_Javascript_concepts/` - JavaScript concepts, identifiers, and naming conventions.
- `chapter_03_Identifier_Literals/` - Identifier rules, literals, comments, and related examples.
- `vs_code_shortcut.md` - Common Visual Studio Code shortcuts in table format.

## How to Run

Make sure Node.js is installed. Then run any JavaScript file from the project root:

```bash
node chapter_01_basics/01_basics.js
```

Or run a different file, for example:

```bash
node chapter_03_Identifier_Literals/08_Comments.js
```

## Example Files

- `chapter_01_basics/04_JS_Hotcode.js` - Hot code reload example.
- `chapter_02_Javascript_concepts/07_Identifier_Part2.js` - Naming convention examples.
- `chapter_03_Identifier_Literals/08_Comments.js` - JavaScript comment examples.
- `vs_code_shortcut.md` - VS Code shortcut reference.

## Notes

- Use `Ctrl+Shift+P` in VS Code to open the command palette.
- Use `Ctrl+`\`` to open the integrated terminal.
- Use this repository to practice JavaScript syntax, rules, and editor workflow.

JavaScript Research: Literals, Identifiers, Keywords
1. Literals
Literals are fixed values written directly in code.
They represent data without needing computation.
Examples:

String literal: "hello" or 'hello' or `hello`
Number literal: 42, 3.14, 0xFF, 0b1010
Boolean literal: true, false
Null literal: null
Undefined literal: undefined
Object literal: { name: "Prachi", age: 25 }
Array literal: [1, 2, 3]
RegExp literal: /abc/i
BigInt literal: 12345678901234567890n
Symbol literal: Symbol("id")
2. Identifiers
Identifiers are names for variables, functions, classes, parameters, properties, etc.
They are user-defined names used to refer to program elements.
Identifier rules:

Must start with a letter, _, or $
Can contain letters, digits, _, $
Cannot start with a digit
Case-sensitive (myVar ≠ myvar)
Cannot contain spaces or punctuation
Cannot be a reserved keyword
Valid examples:

userName
_temp
$price
myVar123
Invalid examples:

123name
user-name
first name
var
Common naming conventions:

camelCase for variables and functions: userName, calculateTotal
PascalCase for classes: UserProfile
SCREAMING_SNAKE_CASE for constants: MAX_VALUE
3. Keywords
Keywords are reserved words that have special meaning in JavaScript syntax.
They cannot be used as identifiers.
Examples of keywords:

Variable and declaration: var, let, const
Control flow: if, else, switch, case, default
Loops: for, while, do, break, continue
Functions and classes: function, return, class, extends, super, new
Error handling: try, catch, finally, throw
Modules: import, export, default
Async / iterators: async, await, yield
Others: this, typeof, instanceof, delete, void, in, of, with