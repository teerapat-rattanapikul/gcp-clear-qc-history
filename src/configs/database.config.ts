import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {

	// constructor(
	// 	@Inject('ConfigManager')
	// 	private config: ConfigManager,
	// ) {

	createTypeOrmOptions(): TypeOrmModuleOptions {

		const config: TypeOrmModuleOptions = {
			type: 'mysql',
			host: "teerapat-database.c4of9bgp6t6p.ap-southeast-1.rds.amazonaws.com",
			port: 3306,
			database: "adminpanel",
			username: "root",
			password: "11223344",
			entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			// entities: ['../**/*.entity{.ts,.js}'],
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
}
