const mongoDB = require('../db/connect')


// get data from database and return; data is an object in array
const getData = async (req, res, next) => {
    try {
        const db = mongoDB.getDB();
        // collection.findOne() returns the first match
        const data = await db.collection('professional').findOne({});

        if (!data) {
            return res.status(404).json({ message: "No data found" });
        }

        res.json(data);
    } catch (error) {
        console.error("Error in getData():", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

// const getData = async (req, res, next) => {
//     const result = await mongoDB.getDB().db().collection('professional').find();
//     result.toArray().then((lists) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists[0]); // we just need the first one (the only one)
//     });
//   };
  
module.exports = { getData }