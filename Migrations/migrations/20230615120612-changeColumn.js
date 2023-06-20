module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("user_details", "gender", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn("user_details", "gender")]);
  },
};
