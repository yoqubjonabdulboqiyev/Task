import { BaseEntity } from "src/common/database/base.entity";
import { ID, Roles } from "src/common/types/type";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: ID;

    @Column({
      name: 'is_active',
      type: 'boolean',
      nullable: false,
      default: true,
    })
    isActive: boolean;
  
    @Column({
      name: 'is_deleted',
      type: 'boolean',
      nullable: false,
      default: false,
    })
    isDeleted: boolean;
    
    @Column({ name: 'firstname', type: 'varchar', length: 64, nullable: false })
    firstName: string;

    @Column({ name: 'lastname', type: 'varchar', length: 64, nullable: true })
    lastName: string;

    @Column({ type: 'text', nullable: true })
    password: string;

    @Column({ type: 'text', nullable: true })
    phone: string;

    @Column({ type: 'text', nullable: true })
    role: Roles;
    
}
