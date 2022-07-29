const Kitten = require("./kitten");
const User = require("./user");
const Toy = require("./toy")

Kitten.belongsTo(User);
User.hasMany(Kitten);

Kitten.hasMany(Toy);
Toy.belongsTo(Kitten);

module.exports = {
    Kitten,
    User,
    Toy
}