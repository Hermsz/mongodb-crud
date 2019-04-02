const {MongoClient, ObjectID } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'mongoDB_CRUD'

class booksController {

  static findAll(req, res) {
    let client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect()
      .then(() => {
        let db = client.db(dbName)
        let books = db.collection('books')
        books
          .find()
          .toArray()
          .then(allBooks => {
            res.status(200).json(allBooks)
            client.close();
          })
          .catch(err => {
            res.status(500).json(err)
          })
      })
  }

  static findOne(req, res) {
    let client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect()
      .then(() => {
        let db = client.db(dbName)
        let books = db.collection('books') 
        books
          .findOne({
            _id: new ObjectID(req.params.id)
          })
          .then(book => {

            // console.log(book)
            res.status(200).json(book)
            client.close()
          })
          .catch(err => {
            res.status(500).json(err)
          })
      })
  }

  // create using updateOne
  static create(req, res) {
    let client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect()
      .then(() => {
        let db = client.db(dbName)
        let books = db.collection('books')
        books
          .insertOne({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
          })
          .then(book => {
            res.status(200).json(book)
            client.close()
          })
          .catch(err => {
            res.status(200).json(err)
          })
      })
  }

  // Update using updateOne
  static update(req, res) {
    let client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect()
      .then(() => {
        let db = client.db(dbName)
        let books = db.collection('books')
        books
          .updateOne(
            { _id: new ObjectID(req.params.id) },
            { $set: {author: req.body.author } }
          )
      })
      .then(book => {
        res.status(200).json(book)
        client.close()
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }

  // Delete using deleteOne
  static delete(req, res) {
    let client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect()
      .then(() => {
        let db = client.db(dbName)
        let books = db.collection('books')
        books
          .deleteOne({
            _id: new ObjectID(req.params.id)
          })
      })
      .then(book => {
        res.status(200).json(book)
        client.close()
      })
      .catch(err => {
        res.status(200).json(err)
      })
  }
}

module.exports = booksController