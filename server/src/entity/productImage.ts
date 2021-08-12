import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import Product from "./product";

@Entity()
class ProductImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column('text')
  url!: string;
    
  @ManyToOne(() => Product, Product => Product.idx, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({name : "product_idx"})
  product!: Product
    
  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default ProductImage;