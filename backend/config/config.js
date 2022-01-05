import { Sequelize } from "sequelize";

const db = new Sequelize("your_database", "root", "your_password", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
