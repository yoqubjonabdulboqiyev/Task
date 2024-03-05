import { BaseEntity } from "src/common/database/base.entity";
import { RldEntity } from "src/rld/entities/rld.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('Rl')
export class RlEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  assembly_id: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  locus_name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public_locus_name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  chromosome: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  strand: string;

  @Column({ type: 'int', nullable: true })
  locus_start: number;
  
  @Column({ type: 'int', nullable: true })
  locus_stop: number;

  @Column({ type: 'int', nullable: true })
  member_count: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  urs_taxid: string;

  @OneToMany(() => RldEntity, (member) => member.locus_member, {
    cascade: true,
  })
  locus_members: RldEntity[];
}
