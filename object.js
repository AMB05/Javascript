let person = {  
    name: "John",  
    age: 30,  
    isStudent: false  
};
// akses properti
console.log(person.name);  // Output: John  
console.log(person['age']); // Output: 30
// mengubah properti
person.age = 31;                // Mengubah nilai age  
person.email = "john@example.com"; // Menambahkan properti baru
// menghapus properti
delete person.isStudent; // Menghapus properti isStudent

// method object
let car = {  
    brand: "Toyota",  
    model: "Camry",  
    displayInfo: function() {  
        return `${this.brand} ${this.model}`;  
    }  
};  
console.log(car.displayInfo()); // Output: Toyota Camry

// nested object
let employee = {  
    name: "Alice",  
    position: "Developer",  
    contact: {  
        email: "alice@example.com",  
        phone: "123-456-7890"  
    }  
};  
console.log(employee.contact.email); // Output: alice@example.com