class Book{
    constructor(title,author,year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    static topBookStore(){
        return 'Kelvin Onkundi'
   }
   

}
//staticmethods - you can have a method in your class without initianting


//Instantiate an Object
const book1 = new Book('Book 1','Onkundi','2020')
console.log(book1)