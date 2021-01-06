const connection = require("./connection.js");


const orm = {

    selectAll: function (cb) {
        const queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    insertOne: function (newBurger, cb) {
        const queryString = "INSERT INTO burgers SET  burger_name = ?;";
        connection.query(queryString, [newBurger], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function (burgerId, cb) {
        const queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
        connection.query(queryString, [burgerId], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm