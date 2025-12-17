import { Sequelize } from 'sequelize';
// CORREÇÃO AQUI: Adicionar 'assert { type: 'json' }' para NodeNext
import config from '../../config/config.json' with { type: 'json' };

// Define a configuração que será usada (development)
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env as keyof typeof config];

// Cria a instância do Sequelize com base na configuração do config.json
const database = new Sequelize({
    dialect: dbConfig.dialect as 'sqlite' | 'mysql', // Incluindo dialetos SQL
    // Se o dialeto for 'sqlite', TypeScript sabe que 'storage' existe.
    // Caso contrário (como em production), 'storage' será undefined/nulo, o que o Sequelize aceita para SQL.
    // Usamos um cast (as any) para acalmar o compilador, garantindo que ele não force a existência de 'storage' em todos os casos.
    ...dbConfig as any, 
    logging: false,                         
});

export default database;