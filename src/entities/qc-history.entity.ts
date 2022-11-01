import { Column, Entity } from 'typeorm';
import { DateBaseEntity } from './date-base.entity';
import { ColumnNumericTransformer } from './transformer/column-numeric.transformer';

@Entity('qc_history')
export class QCHistory extends DateBaseEntity {

    @Column('bigint', {
		name: 'id',
		primary: true,
		generated: 'increment',
		transformer: new ColumnNumericTransformer(),
	})
	id: number;

    @Column('int', { name: 'merchant_bussiness_type', transformer: new ColumnNumericTransformer() })
	merchantBussinessType: number;

    @Column('bigint', { name: 'shop_id', transformer: new ColumnNumericTransformer() })
	shopId: number;

    @Column('varchar', { name: 'shop_name', length: 100 })
    shopName: string;

    @Column('varchar', { name: 'shop_qc_status', length: 20 })
    shopQcStatus: string;

    @Column({ name: 'approve', type: 'int'})
    approve: string;

    @Column({ name: 'reject', type: 'int'})
    reject: string;
}