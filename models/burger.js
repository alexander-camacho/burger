// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: function (cb) {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },

    updateOne: function (cb) {
        orm.updateOne("burgers", burgerId, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;