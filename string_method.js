// String.prototype.match()
// Mencocokkan pola dan mengembalikan hasil sebagai array.
const str1 = "hello world";  
const matches = str1.match(/world/);  
console.log(matches); // Output: ["world", index: 6, input: "hello world", groups: undefined]

// String.prototype.replace()
// Menggantikan bagian string yang cocok dengan pola.
const str2 = "hello world";  
const newStr = str2.replace(/world/, "there");  
console.log(newStr); // Output: "hello there"

// String.prototype.search()
// Mencari pola dalam string dan mengembalikan index 
// dari kemunculan pertama, atau -1 jika tidak ada.
const str3 = "hello world";  
const index = str3.search(/world/);  
console.log(index); // Output: 6

// String.prototype.split()
// Membagi string menggunakan pola sebagai delimitator
const str4 = "hello,world,how,are,you";  
const parts = str4.split(/,/);  
console.log(parts); // Output: ["hello", "world", "how", "are", "you"]

