class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Happy Coding` + " " + this.name)
    }
}

class Dog extends Person {
    constructor(name, breed) {
        super(name)
        this.breed = breed;
    }

    bark() {
        console.log("Barking")
    }
}
const person = new Person("Akshad", 22)
const dog = new Dog("Max", "Bhow")
console.log(dog.name)
dog.bark()
console.log(person.name)
console.log(person.age)
person.greet()