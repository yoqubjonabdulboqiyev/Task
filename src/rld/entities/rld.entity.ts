import { BaseEntity } from "src/common/database/base.entity";
import { RlEntity } from "src/rl/entities/rl.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@Entity('Rld')
export class RldEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 64, nullable: true })
    membership_status: string;

    @Column({ type: 'int', nullable: true })
    locus_id: number;

    @Column({ type: 'int', nullable: true })
    region_id: number;

    @Column({ type: 'int', nullable: true })
    @Index()
    locus_member_id: number

    @ManyToOne(() => RlEntity, (locus_member_id) => locus_member_id.locus_members, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'locus_member_id', referencedColumnName: 'id' })
    locus_member: RlEntity;

}
