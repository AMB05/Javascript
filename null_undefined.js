let a;            // a adalah undefined  
let b = null;    // b adalah null  

console.log(a);  // Output: undefined  
console.log(b);  // Output: null  

if (a == null) {  
  console.log("a is null or undefined"); // Output: a is null or undefined  
}  

if (b === null) {  
  console.log("b is explicitly null");    // Output: b is explicitly null  
}


