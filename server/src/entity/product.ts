import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import CategoryEntity from './category';

@Entity({ name: 'product' })
class ProductEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  thumbnail: string;

  @Column('int')
  price: number;

  @Column('longtext')
  description: string;

  @Column('text')
  shipSummary: string;

  @Column('text')
  shipDetail: string;

  @Column('text')
  policy: string;

  @ManyToOne(() => CategoryEntity, categoryEntity => categoryEntity.idx, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'category_idx' })
  category: CategoryEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default ProductEntity;
