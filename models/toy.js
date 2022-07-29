const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Toy extends Model {}

Toy.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    },
    description: {
        type:DataTypes.TEXT
    }
},{
    sequelize
});

module.exports=Toy