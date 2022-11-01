import { QCHistory } from '../entities/qc-history.entity';
import { EntityRepository, Repository } from 'typeorm';
import {CustomRepository  } from './typeorm.decorator'

@CustomRepository(QCHistory)
export class QCHistoryRepository extends Repository<QCHistory> {

}