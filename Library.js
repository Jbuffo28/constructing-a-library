const Express = require("express")
const { MongoClient, ObjectId } = require("mongodb")
const app = Express()
const PORT = 5000


class Library {
    constructor(dbUrl, dbName, collName) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.collName = collName;
    this.dbClient;
    }

    async client() {
        console.log(`Connecting to ${this.dbUrl}...`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log("Connected to database.");
        return this.dbClient;
    }

    async test() {
        const client = await this.client()
        client.close()
        } 
        
        async collection() {
            const client = await this.client();
            const db = client.db(this.dbName);
            const collection = db.collection(this.collName);
            return collection;
        
        
    }

    app.get("/allBooks/Library", async (req, res) =>{
        let collection = await (this.collection)
        return find.collection({})
        })
        
        app.get("/findOneBook/Library", async (id) =>{
        let docId = ObjectId(id)
        let collection = await (this.collection)
        return find.collection({docId})
        })
        
        app.get("/findManyBooks/Library", async (query) =>{
        
        })
        
        app.get("/addBook/Library", async (req, res) =>{
            
        })
        
        app.get("/changeBook/Library", async (req, res) =>{
            
        })
        
        app.get("/removeBook/Library", async (req, res) =>{
            
        })
module.exports = Library
        
// Pauls code 
        async allBooks() {
            let collection = await this.collection()
            collection.find({}).toArray
        }
    
    async findOneBook(){
        let docId = ObjectId(id)
        let collection = await this.collection()
        return collection.find(docId).toArray
    }

    async findManyBooks(query){
        let collection = await this.collection()
        return collection.find(query)
    }
    
    async addBook(info){
        let collection = await this.collection()
        collection.insertOne(info)
        console.log(`books entered`)
    }

    async changeBook(id, newInfo){
        let mongoId = ObjectId(id)
        let infoObj = { $set: newInfo }
        let collection = await this.collection()
        collection.updateOne(mongoId, infoObj)
        console.log('book updated')
    }

    async removeBook(id){
        let mongoId = ObjectId(id)
        let collection = await this.collection()
        collection.deleteOne(mongoId)
        console.log('book deleted')
    }

    }

    // app.listen(PORT, () => {
    //     console.log(`Listening on port ${PORT}`)
    // })
    