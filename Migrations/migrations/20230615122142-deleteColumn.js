'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn('user_details', 'gender');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('user_details', 'gender', {
          type: Sequelize.DataTypes.STRING,
          defaultValue: null
        }, { transaction: t })
      ])
    })
  }
};
