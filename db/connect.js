const { MongoClient } = require("mongodb");

//create variable with instance of database
let dbConnection;

//connect to the database
const connectDB = async (url) => {

  //should I use if(dbConnection) test first? if connected, don't try and connect.
  if (dbConnection) {
    console.log("Using existing MongoDB connection...");
    return dbConnection;
  }
  
  try {
    const client = await MongoClient.connect(url );
    dbConnection = client.db(); // store connection
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("Error connecting to MongoDB ", error);
    throw error; // Ensure the app doesn't start if DB fails to connect
  }
};

// get instance of database
const getDB = () => {
  if (!dbConnection) {
    throw new Error("Database not connected yet.");
  }
  return dbConnection;
};

module.exports = { connectDB, getDB };
