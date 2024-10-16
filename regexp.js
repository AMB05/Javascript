const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;  
const email = "example@email.com";  
console.log(emailRegex.test(email)); // Output: true

