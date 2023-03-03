const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const getMongoUri = () => {
  if (dbUser && dbPassword) {
    return `mongodb+srv://${dbUser}:${dbPassword}@lizgram.mxhdmhk.mongodb.net/?retryWrites=true&w=majority`
  }

  return "mongodb://localhost:27017/?retryWrites=true&w=majority"
}

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(getMongoUri());
    console.log("Conectou ao banco de dados!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
