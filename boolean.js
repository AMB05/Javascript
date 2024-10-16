let nilai = 85;  
let lulus = nilai >= 75; // Menghasilkan true jika nilai >= 75  

if (lulus) {  
  console.log("Selamat, Anda lulus!");  
} else {  
  console.log("Maaf, Anda harus mengulang.");  
}

// operasi logika and or not
// AND (&&)
let a = true;  
let b = false;  
console.log(a && b); // Output: false

//OR (||)
let c = true;  
let d = false;  
console.log(a && b); // Output: false

//NOT (!)
console.log(!a); // Output: false

// konversi boolean
console.log(Boolean(0));        // Output: false  
console.log(Boolean(""));       // Output: false  
console.log(Boolean(null));     // Output: false  
console.log(Boolean("Hello"));  // Output: true  
console.log(Boolean(5));        // Output: true

// function
function isEven(num) {  
        return num % 2 === 0; // Mengembalikan true jika genap, false jika tidak  
    }  
    
console.log(isEven(4)); // Output: true  
console.log(isEven(5)); // Output: false