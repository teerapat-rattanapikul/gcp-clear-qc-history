import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateBaseEntity extends BaseEntity {

	@CreateDateColumn({ type: 'datetime', name: 'created_date', default: () => 'CURRENT_TIMESTAMP' })
	createdDate: Date;

	@UpdateDateColumn({ type: 'datetime', name: 'updated_date', default: () => 'CURRENT_TIMESTAMP' })
	updatedDate: Date;
}