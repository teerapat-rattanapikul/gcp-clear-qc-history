"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const common_1 = require("@nestjs/common");
let DatabaseConfig = class DatabaseConfig {
    createTypeOrmOptions() {
        const config = {
            type: 'mysql',
            host: "teerapat-database.c4of9bgp6t6p.ap-southeast-1.rds.amazonaws.com",
            port: 3306,
            database: "adminpanel",
            username: "root",
            password: "11223344",
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            keepConnectionAlive: true,
            logging: true,
            synchronize: false,
            timezone: '+07:00',
            extra: {
                connectionLimit: 30,
            },
        };
        return config;
    }
};
DatabaseConfig = __decorate([
    (0, common_1.Injectable)()
], DatabaseConfig);
exports.DatabaseConfig = DatabaseConfig;
//# sourceMappingURL=database.config.js.map