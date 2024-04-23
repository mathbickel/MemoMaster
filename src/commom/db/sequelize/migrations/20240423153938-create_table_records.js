'use strict';

const sequelize = require('../../../../../sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('records', { 
      id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      author: Sequelize.STRING,
      description: Sequelize.STRING,
      category: Sequelize.STRING,
      tags: Sequelize.JSON,
      content: Sequelize.JSON,
      source: Sequelize.STRING,
      relatedLinks: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('records');
  }
};
