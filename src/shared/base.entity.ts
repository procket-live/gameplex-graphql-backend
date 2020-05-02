import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'boolean', default: true })
    is_active: boolean;

    @Column({ type: 'boolean', default: false })
    is_archived: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    created_by: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    updated_by: string;

    @Column({ type: 'timestamptz', default: null, nullable: true })
    deleted_at: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    internal_comment: string | null;
}