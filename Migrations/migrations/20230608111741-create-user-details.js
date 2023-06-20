'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_details', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "id"
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "first_name"
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "last_name"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "email"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: 'created_date'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: 'updated_date'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_details');
  }
};