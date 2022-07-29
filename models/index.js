const Kitten = require("./kitten");
const User = require("./User");
const Toy = require("./Toy")

Kitten.belongsTo(User);
User.hasMany(Kitten);

Kitten.hasMany(Toy);
Toy.belongsTo(Kitten);

module.exports = {
    Kitten,
    User,
    Toy
}