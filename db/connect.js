const { MongoClient } = require("mongodb");

//create variable with instance of database
let dbConnection;

//connect to the database
const connectDB = async (url) => {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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
