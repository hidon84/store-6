import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import UserEntity from './user';
import ProductEntity from './product';

@Entity({name : 'view'})
@Unique(['user', 'product'])
class ViewEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @ManyToOne(() => ProductEntity, productEntity => productEntity.idx, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'product_idx' })
  product!: ProductEntity;

  @ManyToOne(() => UserEntity, userEntity => userEntity.idx, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'user_idx' })
  user!: UserEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}

export default ViewEntity;
