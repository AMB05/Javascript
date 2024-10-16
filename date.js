// akses data waktu saat ini
const now = new Date();  
console.log(now); // Output: Waktu saat ini

// akses data tanggal waktu
const specificDate = new Date(2023, 0, 1, 10, 30, 0); // 1 Januari 2023, jam 10:30:00  
console.log(specificDate);

// pengolah data dari string
const dateFromString = new Date("2023-01-01T10:30:00");  
console.log(dateFromString); // Output: Sun Jan 01 2023 10:30:00 GMT...

// mengambil komponen tanggal
const date = new Date();  
console.log(date.getFullYear()); // Mengambil tahun (contoh: 2023)  
console.log(date.getMonth());    // Mengambil bulan (0-11)  
console.log(date.getDate());     // Mengambil tanggal (1-31)  
console.log(date.getHours());    // Mengambil jam (0-23)  
console.log(date.getMinutes());  // Mengambil menit (0-59)  
console.log(date.getSeconds());  // Mengambil detik (0-59)

// mengatur komponen tanggal
const dateForSet = new Date();  
dateForSet.setFullYear(2022);  
dateForSet.setMonth(5);  // Juni  
dateForSet.setDate(15);  
console.log(dateForSet); // Output: Tanggal yang diubah

// menghitung selisih tanggal
const date1 = new Date("2023-01-01");  
const date2 = new Date("2023-01-10");  

const timeDiff = date2 - date1; // Selisih waktu dalam milidetik  
const daysDiff = timeDiff / (1000 * 3600 * 24); // Mengubah ke hari  

console.log(daysDiff); // Output: 9

// format tanggal
const dateToFormat = new Date();  

console.log(dateToFormat.toLocaleDateString()); // Format tanggal lokal  
console.log(dateToFormat.toUTCString());        // Format UTC  
console.log(dateToFormat.toISOString());        // Format ISO

// validasi tanggal
const invalidDate = new Date("Invalid Date");  
console.log(isNaN(invalidDate.getTime())); // Output: true