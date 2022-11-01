import { Injectable } from '@nestjs/common';
import { QCHistory } from 'src/entities/qc-history.entity';
import { QCHistoryRepository } from '../repositories/qc-history.repository';

@Injectable()
export class QCHistoryService {

	constructor(
        private qcHistoryRepository: QCHistoryRepository,
	) {}

	async getQCHistory(): Promise<QCHistory[]>{
        console.log(`#get QC History Data`);
        const getData = this.qcHistoryRepository.createQueryBuilder('qcHistory').getMany();
        return getData
    }

    async deleteQCHistoryById(currentDate: Date): Promise<void>{
        console.log(`#start delete QC History`)

        await this.qcHistoryRepository
            .createQueryBuilder('qcHistory')
            .delete()
            .where('createdDate < :currentDate', { currentDate })
            .execute();
        
        console.log(`#end delete QC History`)
    }
}