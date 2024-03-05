import {
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  import { ID } from '../types/type';
  
  export class BaseEntity {
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
  }
  