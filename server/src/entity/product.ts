import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import Category from "./category";

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column('int')
  price!: number;
    
  @Column('longtext')
  description!: string;
    
  @Column('text')
  shipSummary!: string;
    
  @Column('text')
  shipDetail!: string;
    
  @Column('text')
  policy!: string;
    
  @ManyToOne(() => Category, Category => Category.idx, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({name : "category_idx"})
  category!: Category
    
  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default Product;