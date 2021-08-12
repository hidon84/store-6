import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import UserEntity from './user';

@Entity({name : 'shipping'})
class ShippingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({ length: 45 })
  name!: string;

  @Column({ length: 200 })
  address!: string;

  @ManyToOne(() => UserEntity, userEntity => userEntity.idx, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_idx' })
  user!: UserEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}

export default ShippingEntity;
