'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            {
                email: 'truongquocvuong@gmail.com',
                password: '123456',
                firstName: 'Vuong',
                lastName: 'Truong',
                address: 'VietNam',
                phonenumber: '0866500635',
                gender: 1,
                roleid: 'R1',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
