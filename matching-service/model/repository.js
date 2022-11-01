import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelizeInit = new Sequelize("matching-service", 
    process.env.CLOUD_DB_USERNAME, 
    process.env.CLOUD_DB_PASSWORD, 
    {
    dialect: "postgres",
    host: process.env.CLOUD_DB_URL,
    port: process.env.CLOUD_DB_PORT
    }
);

// Established connection with database
try {
    await sequelizeInit.authenticate();
    console.log("DB: Database connection has been established successfully.");
} catch (error) {
    console.error("DB: Unable to connect to the database:", error);
}

export const sequelize = sequelizeInit;
