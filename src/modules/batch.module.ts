import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../configs/database.config';
import { QCHistoryRepository } from '../repositories/qc-history.repository';
import { QCHistoryService } from '../services/qc-history.service';
import { TypeOrmExModule } from './typeorm.module'

@Module({
	imports: [
		// ConfigModule,
		TypeOrmModule.forRootAsync({
			useClass: DatabaseConfig,
		}),
		// TypeOrmModule.forFeature([
		// 	QCHistoryRepository,
		// ]),
		TypeOrmExModule.forCustomRepository([QCHistoryRepository])
	],
	providers: [
		QCHistoryService,
	],
})
export class BatchModule {}
