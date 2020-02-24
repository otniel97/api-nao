'use strict';
module.exports = (sequelize, DataTypes) => {
    const DonationType = sequelize.define('DonationType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: {
                msg: 'No puede tener el nombre vacío.'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: {
                msg: 'No puede tener la descripción vacía.'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
    }, {});
    DonationType.associate = function(models) {
        // associations can be defined here
    };
    return DonationType;
};