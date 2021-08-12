import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import ProductEntity from './product';

@Entity({ name: 'product_image' })
class ProductImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('text')
  url: string;

  @ManyToOne(() => ProductEntity, productEntity => productEntity.idx, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'product_idx' })
  product: ProductEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default ProductImageEntity;
