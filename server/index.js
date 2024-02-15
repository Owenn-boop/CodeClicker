const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;
if (uri == undefined) {
    console.log("Please MONGO_URI to your .env file.");
    process.exit();
}

const itemNames = {
    item_1: 0, // code monkey
    item_2: 0, // hobby programmer
    item_3: 0, // student programmer
};

const itemPrices = {
    item_1: 10, // code monkey
    item_2: 50, // hobby programmer
    item_3: 200, // student programmer
};

const itemProductionRates = {
    item_1: 0.1, // code monkey
    item_2: 1, // hobby programmer
    item_3: 5, // student programmer
};

const client = new MongoClient(uri);

const app = express();
let corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"],
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
        code: 400,
        data: [],
        message: `Bad request: ${msg}`,
    });
}

function getIncrementAmt(username) {
    // finish later
    return 1;
}

async function getTickIncrementAmount(collection, username) {
    let search = await collection.findOne({ username: username });
    let sum = 0;
    if (search === null) {
        internal(res);
    }
    for (const item in search.items) {
        if (search.items[item] > 0) {
            sum += itemProductionRates[item] * search.items[item];
        }
    }
    return sum;
}

async function createDatabaseAccount(collection, username) {
    const userData = {
        username: username,
        loc: 0.0,
        items: itemNames,
    };
    await collection.insertOne(userData);
    let search = await collection.findOne({ username: username });
    if (search === null) {
        internal(res);
    }
    return search;
}

async function run() {
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
        if (id === undefined) {
            badRequest(res, "Parameter missing 'id'");
            return;
        }
        let search = await collection.findOne({ username: id });
        if (search === null) {
            search = await createDatabaseAccount(collection, id);
            res.json({ message: "Success, account created!", data: search });
            return;
        }
        res.json({ message: "Success.", data: search });
        return;
    });

    app.get("/api/v1/click", async (req, res) => {
        try {
            let id = req.query.id;
            if (id === undefined) {
                badRequest(res, "Parameter missing 'id'");
                return;
            }

            if (id.length < 3) {
                internal(res);
                return;
            }

            let search = await collection.findOne({ username: id });
            let incrementAmt = getIncrementAmt(id);

            if (search === null) {
                badRequest(res, "Account does not exist.");
                return;
            } else {
                await collection.findOneAndUpdate(
                    { username: id },
                    {
                        $inc: {
                            loc: incrementAmt,
                        },
                    }
                );
                console.log(
                    `Increased ${id}'s balance by ${incrementAmt} to ${
                        incrementAmt + search.loc
                    }`
                );
                res.json({
                    message: "Success",
                    balance: incrementAmt + search.loc,
                });
                return;
            }
        } catch (err) {
            internal(res);
            console.log(err);
        }
    });

    app.get("/api/v1/updateTick", async (req, res) => {
        try {
            let id = req.query.id;
            if (id === undefined) {
                badRequest(res, "Parameter missing 'id'");
                return;
            }

            let search = await collection.findOne({ username: id });
            let incrementAmt = await getTickIncrementAmount(collection, id);

            if (search === null) {
                badRequest(res, "Account does not exist.");
                return;
            } else {
                await collection.findOneAndUpdate(
                    { username: id },
                    {
                        $inc: {
                            loc: incrementAmt,
                        },
                    }
                );
                console.log(
                    `Increased ${id}'s balance by ${incrementAmt} to ${
                        incrementAmt + search.loc
                    }`
                );
                res.json({
                    message: "Success",
                });
                return;
            }
        } catch (err) {
            internal(res);
            console.log(err);
        }
    });

    app.get("/api/v1/buyItem", async (req, res) => {
        try {
            let item_id = req.query.item_id;
            let username = req.query.id;
            if (item_id === undefined) {
                badRequest(res, "Parameter missing 'id'");
                return;
            }

            if (!(item_id in itemPrices)) {
                badRequest(res, "Invalid item id.");
                return;
            } else {
                let search = await collection.findOne({ username: username });
                let cost = itemPrices[item_id];
                if (search.loc >= cost) {
                    if (item_id in search.items) {
                        await collection.findOneAndUpdate(
                            { username: username },
                            {
                                $inc: {
                                    loc: -cost,
                                    [`items.${item_id}`]: 1,
                                },
                            }
                        );
                    } else {
                        let items_with_new = search.items;
                        items_with_new[`${item_id}`] = 1;
                        await collection.findOneAndUpdate(
                            { username: username },
                            {
                                $inc: {
                                    loc: -cost,
                                },
                                $set: {
                                    items: items_with_new,
                                },
                            }
                        );
                    }
                } else {
                    badRequest(res, "Purchase failed: Not enough LOC.");
                    return;
                }
            }
            res.json({ message: "Successfully purchased an item." });
            return;
        } catch (err) {
            console.log(err);
            internal(res);
            return;
        }
    });
}

run().catch(console.dir);
