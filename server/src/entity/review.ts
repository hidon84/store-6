import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import UserEntity from './user';
import ProductEntity from './product';

@Entity({name : 'review'})
@Unique(['user', 'product'])
class ReviewEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column('text')
  content!: string;

  @Column('float')
  rate!: number;

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

export default ReviewEntity;
