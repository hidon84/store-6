import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import UserEntity from './user';

@Entity({ name: 'shipping' })
class ShippingEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 20 })
  phone: string;

  @Column('text')
  address: string;

  @Column('text')
  detailAddress: string;

  @Column({ length: 45 })
  code: string;

  @Column({ default: false })
  selected: boolean;

  @ManyToOne(() => UserEntity, userEntity => userEntity.idx, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_idx' })
  user: UserEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default ShippingEntity;
