//Program to Create Objects in Different Ways

// Object Literal
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };

// Object Constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2022;

// Object.create()
const animal = {
    sound: 'roar',
    makeSound: function() {
      console.log(this.sound);
    }
  };
  
  const lion = Object.create(animal);
  lion.sound = 'roarrrrr';

// Function Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const john = new Person('John', 30);

  
// Class Syntax (ES6)
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
  

  