'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                isEmail: true,
                validate: {
                    isEmail: true,
                    notNull: true,
                    notEmpty: true,
                },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    min: 8,
                    max: 20,
                },
            },
            address: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.BOOLEAN,
            },
            roleid: {
                type: Sequelize.STRING,
                defaultValue: '3',
            },
            phonenumber: {
                type: Sequelize.STRING,
            },
            positionId: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
