module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Akshay@973042",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
