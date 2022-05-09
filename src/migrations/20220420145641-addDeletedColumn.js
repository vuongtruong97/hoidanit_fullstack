'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('users', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE,
        });
    },

    async down(queryInterface, Sequelize) {},
};
