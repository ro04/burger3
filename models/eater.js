'use strict';
module.exports = function(sequelize, DataTypes){
    var Eater = sequelize.define("Eater", {
        eater_name: {
            type: DataTypes.STRING,
            allowNull: false
            /*validate:{
                isAlpha: true,    // will only allow letters
                len: [1,20]      // only allow values with length between 1 and 20
            }*/
        }
    }, {
        timestamps: false
    });
    {
        Eater.associate = (models) =>{
                // Associating Eater with Burger
                // When an Eater is deleted, also delete any associated Burgers
                Eater.hasMany(models.Burger);
            }
        }
    return Eater;
};