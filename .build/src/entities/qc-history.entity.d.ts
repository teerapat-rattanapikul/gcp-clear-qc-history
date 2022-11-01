import { DateBaseEntity } from './date-base.entity';
export declare class QCHistory extends DateBaseEntity {
    id: number;
    merchantBussinessType: number;
    shopId: number;
    shopName: string;
    shopQcStatus: string;
    approve: string;
    reject: string;
}
