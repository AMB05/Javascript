// array
let fruits = ["apple", "banana", "cherry"];

// akses data array
console.log(fruits[0]); // Output: apple

// modifikasi elemen array
fruits[1] = "orange"; // Mengubah "banana" menjadi "orange"

// menambahkan nilai pada elemen array
fruits.push("grape"); // Menambahkan "grape" di akhir array


// penereapan array
let numbers = [1, 2, 3, 4, 5];  
// Menambah 10 ke setiap elemen  
let doubled = numbers.map(num => num * 2);  
// Menyaring angka genap  
let evens = numbers.filter(num => num % 2 === 0);  
// Menghitung total  
let sum = numbers.reduce((acc, num) => acc + num, 0);