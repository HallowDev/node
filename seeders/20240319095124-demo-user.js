'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    firstname: 'Damien',
    lastname: 'Servanin',
    email: "damiens2000@outlook.fr",
    password: "123soleil",
    }], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
  }
};