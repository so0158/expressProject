const { Sequelize, DataTypes } = require("sequelize");

mudule.exports = (Sequelize, DataTypes) => {
    const newCustomer = Sequelize.define("new_customer", {
        name: {
            type: DataTypes.String(20),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        joined_date: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    }, {
       timestamps: false 
    });
    return newCustomer;
};