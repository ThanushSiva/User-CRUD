const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect((process.env.URL))
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectToDB;