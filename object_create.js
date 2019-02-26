//Object of Protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}

const book1 = Object.create(bookProtos,{
    title : {value:'Book one'},
    author : {value : 'onkundi'},
    year:{value:'2020'}
})