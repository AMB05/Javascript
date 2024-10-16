// Menggunakan tanda kutip tunggal  
let nama = 'Alice';  

// Menggunakan tanda kutip ganda  
let sapaan = "Halo, " + nama + "!";  

// Menggunakan template literal  
let pesan = `Selamat datang, ${nama}!`;  

console.log(sapaan); // Output: Halo, Alice!  
console.log(pesan);   // Output: Selamat datang, Alice!


// penggabungan string
let depan = "John";  
let belakang = "Doe";  
let fullName = depan + " " + belakang; // Menggunakan operator +  
console.log(fullName); // Output: John Doe  

let fullNameTemplate = `${depan} ${belakang}`; // Menggunakan template literal  
console.log(fullNameTemplate); // Output: John Doe


// metode string
let kalimat = "Belajar JavaScript itu menyenangkan!";  
// Panjang string  
console.log(kalimat.length); // Output: 32  
// Mengubah menjadi huruf kapital  
console.log(kalimat.toUpperCase()); // Output: BELAJAR JAVASCRIPT ITU MENYENANGKAN!  
// Mengubah menjadi huruf kecil  
console.log(kalimat.toLowerCase()); // Output: belajar javascript itu menyenangkan!  
// Mencari substring  
console.log(kalimat.indexOf("JavaScript")); // Output: 8  
// Mengganti substring  
console.log(kalimat.replace("menyenangkan", "seru")); // Output: Belajar JavaScript itu seru!  
// Mengiris string  
console.log(kalimat.slice(0, 7)); // Output: Belajar