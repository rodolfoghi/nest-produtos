import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config'; 

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case 'development':
                config = databaseConfig.development;
                break;
            case 'test':
                config = databaseConfig.test;
                break;
            case 'production':
                config = databaseConfig.production;
                break;
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels(['']);
        await sequelize.sync();
        return sequelize;
    }
}]