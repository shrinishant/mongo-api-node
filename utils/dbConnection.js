const mongoose = require("mongoose");
require('dotenv').config()

const dbConn = async () => {
    const username = process.env.USER_NAME;
    const password = process.env.PASSWORD;
    const cluster = process.env.CLUSTER;
    const dbname = process.env.DBNAME;

    console.log(username, password, cluster);

    mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("Connected to MongoDb successfully");
    }).catch((e) => {
        console.log(e);
    })
}

module.exports = dbConn;