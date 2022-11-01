import { Handler } from 'aws-lambda';
import { INestApplication } from '@nestjs/common';
export declare const initialApp: (expressInstance: any) => Promise<INestApplication>;
export declare const QCHistory: Handler;
