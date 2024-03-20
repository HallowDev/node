'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Woods', [
    {
      name: "Epicéa",
      type: "softwood",
      hardness: "soft",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pin",
      type: "softwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sapin",
      type: "softwood",
      hardness: "soft",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Douglas",
      type: "softwood",
      hardness: "soft",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mélèze",
      type: "softwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cèdre rouge",
      type: "softwood",
      hardness: "soft",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ipé",
      type: "exotic wood",
      hardness: "hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Padouk",
      type: "exotic wood",
      hardness: "hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Badi",
      type: "exotic wood",
      hardness: "hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Itauba",
      type: "exotic wood",
      hardness: "hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chêne",
      type: "noble and hardwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Erable",
      type: "noble and hardwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Châtaignier",
      type: "noble and hardwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hêtre",
      type: "noble and hardwood",
      hardness: "medium-hard",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Woods', null, {});
  }
};