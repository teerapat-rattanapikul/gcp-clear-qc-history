import { BatchModule } from './modules/batch.module';
import { Handler } from 'aws-lambda';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { QCHistoryService } from './services/qc-history.service';

const initialApp = async (): Promise<INestApplication> => {

	const app = await NestFactory.create(BatchModule)
	return app;
};

export const QCHistory: Handler = async (event: any): Promise<any> => {

	console.log(`#main delete qc history start`);
	const app = await initialApp()
	
	const qcHistory = app.get(QCHistoryService)

	const changeDate = new Date().setDate(new Date().getDate() - 7)
	const limitDate = new Date(changeDate)
	console.log(`limit date ${limitDate}`)

	await qcHistory.deleteQCHistoryById(limitDate)

	console.log('#main delete qc history end')
	await app.close();
	return true;
}

