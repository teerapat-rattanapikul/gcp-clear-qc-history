import { BatchModule } from './modules/batch.module';
import { Handler } from 'aws-lambda';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { QCHistoryService } from './services/qc-history.service';
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'

export const initialApp = async (expressInstance: any): Promise<INestApplication> => {

	const app = await NestFactory.create(BatchModule, new ExpressAdapter(expressInstance))
	return app;
};

export const QCHistory: Handler = async (event: any): Promise<any> => {

    const server = express()

	console.log(`#main delete qc history start`);
	const app = await initialApp(server)
	
	const qcHistory = app.get(QCHistoryService)

	const changeDate = new Date().setDate(new Date().getDate() - 7)
	const limitDate = new Date(changeDate)
	console.log(`limit date ${limitDate}`)

	await qcHistory.deleteQCHistoryById(limitDate)

	console.log('#main delete qc history end')
	await app.close();
	return true;
}
