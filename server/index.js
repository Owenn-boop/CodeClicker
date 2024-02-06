const express = require('express');
const cors = require('cors'); 
const { MongoClient } = require("mongodb");
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;
if(uri == undefined){
    console.log("Please MONGO_URI to your .env file.");
    process.exit();
}

const client = new MongoClient(uri);

const app = express();
let corsOptions = { 
    origin: [ 'http://localhost:3000', 'http://localhost:3001' ] 
}; 
app.use(cors(corsOptions));

async function run(){
    await client.connect();

    const dbName = "myDatabase";
    const collectionName = "userData";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const userData = {
        username: "owenn",
        loc: 4
    }

    try {
        let search = await collection.findOne({username: "owenn"});
        if(search === null){
            console.log("Item not found");
            const insert = await collection.insertOne(userData);
            console.log(`${insert.insertedCount} documents successfully inserted.\n`);
        }
        else{
            console.log(search.loc);
        }
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    }
    
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });

    app.get("/api/v1", (req, res) => {
        res.json({ message: "Hello from server!" });
    });
    
    app.get("/api/v1/click", async (req, res) => {
        try{
            let id = req.query.id;
            let search = await collection.findOne({username: id});
            let incrementAmt = 1;
    
            if(search === null){
                const userData = {
                    username: id,
                    loc: 0
                }
                await collection.insertOne(userData);
                search = await collection.findOne({username: id});
                if(search === null){
                    res.status(500).json({
                        status: "error",
                        code: 500,
                        data: [],
                        message: "Internal Server Error",
                    });
                }
                res.json({message: "Success, account created!", balance: incrementAmt + search.loc});
            } else {
                await collection.findOneAndUpdate(
                    {'username': id},
                    {
                        $inc: {
                            'loc': incrementAmt
                        }
                    }
                )
                console.log(`Increased ${id}'s balance by ${incrementAmt} to ${incrementAmt + search.loc}`);
                res.json({message: "Success", balance: incrementAmt + search.loc});
            }
        } catch (err) {
            res.status(500).json({
                status: "error",
                code: 500,
                data: [],
                message: "Internal Server Error",
            });
        }
    });
}


run().catch(console.dir);