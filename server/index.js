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

function internal(res) {
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "Internal Server Error",
    });
}
function badRequest(res, msg) {
    res.status(400).json({
        status: "error",
        code: 404,
        data: [],
        message: `Bad request: ${msg}`,
    });
}

function getIncrementAmt(username) {
    // finish later
    return 1;
}

async function createDatabaseAccount(collection, username) {
    const userData = {
        username: username,
        loc: 0,
        items: []
    }
    await collection.insertOne(userData);
    search = await collection.findOne({username: username});
    if(search === null){
        internal(res);
    }
    return search;
}

async function run(){
    await client.connect();

    const dbName = "myDatabase";
    const collectionName = "userData";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    /*
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
    */
    
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });

    app.get("/api/v1", (req, res) => {
        res.json({ message: "Hello from server!" });
    });
    
    app.get("/api/v1/getAccount", async (req, res) => {
        let id = req.query.id;
        if(id === undefined) {
            badRequest(res, "Parameter missing 'id'");
            return;
        }
        let search = await collection.findOne({username: id});
        if(search === null){
            search = await createDatabaseAccount(collection, id);
            res.json({message: "Success, account created!", data: search});
            return;
        }
        res.json({message: "Success.", data: search});
        return;
    });

    app.get("/api/v1/click", async (req, res) => {
        try{
            let id = req.query.id;
            if(id === undefined) {
                badRequest(res, "Parameter missing 'id'");
                return;
            }

            if(id.length < 3) {
                internal(res);
                return;
            }

            let search = await collection.findOne({username: id});
            let incrementAmt = getIncrementAmt(id);
    
            if(search === null){
                badRequest(res, "Account does not exist.");
                return;
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
                return;
            }
        } catch (err) {
            internal(res);
        }
    });
}


run().catch(console.dir);