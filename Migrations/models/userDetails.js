const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "first_name"
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "last_name"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: 'created_date'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: 'updated_date'
    }
  }
  const options = {
    tableName: "user_details",
    comment: '',
    indexes: [],
  }
  const userDetailsModel = sequelize.define('user_details', attributes, options)
  return userDetailsModel
}