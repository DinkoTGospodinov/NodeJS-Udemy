const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Dinko:IRa44jnvkVVIj9Xj@cluster0.nrnijsc.mongodb.net/"
  )
    .then((client) => {
      console.log('Connected');
      _db = client.db('Vehtosharnik');
      callback()
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw "No database found"
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;