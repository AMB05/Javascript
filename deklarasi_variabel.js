// Menggunakan var  
var nama = "John"; // variabel bisa di-reassign  
console.log(nama); // Output: John  

// Menggunakan let  
let umur = 25; // variabel bisa di-reassign  
console.log(umur); // Output: 25  

umur = 26; // reassign nilai  
console.log(umur); // Output: 26  

// Menggunakan const  
const kota = "Jakarta"; // variabel tidak bisa di-reassign  
console.log(kota); // Output: Jakarta  

// Uncommenting the line below will cause an error  
// kota = "Bali"; // TypeError: Assignment to constant variable.