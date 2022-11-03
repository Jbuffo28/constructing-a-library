const { application } = require("express")
const { FindCursor } = require("mongodb")
const Library = require("./Library")

let collection = new Library ("mongodb://localhost:27017", "Library", "books",)
collection.test()
let allBooks = await (collection.test())
let findOneBook = await (_id)

allBooks.forEach(i => console.log(i))
findOneBook.forEach(i => console.log(i))


// Pauls Code
async function showEndpoints(){
    let allBooks = await (collection.allBooks())
    console.log(allBooks).toArray()
    
    let findOneBook = await collection.findOneBook(bookid)
    console.log(findOneBook)

    let query = await collection.findManyBooks
    console.log(query)

    console.log()

    collection.changeBook

    


}
showEndpoints()

