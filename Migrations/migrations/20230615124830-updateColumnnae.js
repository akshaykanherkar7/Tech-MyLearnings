module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn("user_details", "married", "is_married", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.renameColumn("user_details", "is_married", "married")]);
  },
};
