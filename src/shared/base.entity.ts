import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'boolean', default: true })
    is_active: boolean;

    @Column({ type: 'boolean', default: false })
    is_archived: boolean;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    create_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    created_by: string;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    updated_by: string;

    @Column({ type: 'timestamp', default: null, nullable: true })
    deleted_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    internal_comment: string | null;
}