import { Sequelize } from 'sequelize';
import config from '../../config/config.json';

// Define a configuração que será usada (development)
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env as keyof typeof config];

// Cria a instância do Sequelize com base na configuração do config.json
const database = new Sequelize({
    dialect: dbConfig.dialect as 'sqlite', // Define o dialeto (SQLite)
    storage: dbConfig.storage,              // Define o caminho do arquivo DB
    logging: false,                         // Desativa logs SQL no terminal
});

export default database;