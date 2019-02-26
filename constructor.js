// //constructor
// function Book(title,author,year){
//     this.title = title
//     this.author = author
//     this.year = year
//     this.getSumary = function(){
//         return `${this.title} was written by
//         ${this.author} in ${this.year}`
//     }
// };

// const book1 = new Book('onkundi','kelvin','2015')
// console.log(book1.getSumary())

function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}

//get Summary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
};

//INHERITANCE
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);

    this.month = month;
};

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('mag1','John','2018','jan');

console.log(mag1)