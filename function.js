function greet(name) {  
    return `Hello, ${name}!`;  
}  
console.log(greet("Alice")); // Output: Hello, Alice!

// fungsi ekspresi
const add = function(a, b) {  
    return a + b;  
};  
console.log(add(2, 3)); // Output: 5

// fungsi panah
const multiply = (x, y) => x * y;  
console.log(multiply(4, 5)); // Output: 20

// fungsi parameter default
function divide(a, b = 1) {  
    return a / b;  
}  
console.log(divide(10));  // Output: 10

// fungsi argumen
function processUserInput(callback) {  
    const name = "Bob";  
    callback(name);  
}  
processUserInput(greet);  // Output: Hello, Bob!

// retrun value
function createCounter() {  
    let count = 0;  
    return function() {  
        count++;  
        return count;  
    };  
}  
const counter = createCounter();  
console.log(counter()); // Output: 1  
console.log(counter()); // Output: 2

// fungsi rekursif
function factorial(n) {  
    if (n === 0) {  
        return 1;  
    }  
    return n * factorial(n - 1);  
}  
console.log(factorial(5)); // Output: 120

// fungsi objek pertama
function myFunction() {  
    return "Hello";  
}  
myFunction.customProperty = "This is a custom property";  
console.log(myFunction.customProperty); // Output: This is a custom property

