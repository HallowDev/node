'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Woods', [{
      name: "Chêne",
      type: "noble and hardwoods",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Woods', null, {});
  }
};