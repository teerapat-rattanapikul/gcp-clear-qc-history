import { QCHistory } from 'src/entities/qc-history.entity';
import { QCHistoryRepository } from '../repositories/qc-history.repository';
export declare class QCHistoryService {
    private qcHistoryRepository;
    constructor(qcHistoryRepository: QCHistoryRepository);
    getQCHistory(): Promise<QCHistory[]>;
    deleteQCHistoryById(currentDate: Date): Promise<void>;
}
