const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res)
        })
    },

    insertOne: function(cb) {
        orm.insertOne("burger", newBurger, (res) => {
            cb(res)
        })
    },

    updateOne: function(cb) {
        orm.updateOne("burger", burgerId, (res) => {
            cb(res)
        })
    }
}

module.exports = burger