const sym = Symbol('uniqueKey');  

const obj = {  
    [sym]: 'value'  
};  

console.log(obj[sym]); // Output: 'value'  
console.log(obj); // Output: { [Symbol(uniqueKey)]: 'value' }

