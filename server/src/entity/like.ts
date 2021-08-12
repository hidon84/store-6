import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import User from "./user";
import Product from "./product";

@Entity()
@Unique(['user', 'product'])
class Like extends BaseEntity {
@PrimaryGeneratedColumn()
idx!: number;
    
@ManyToOne(() => Product, Product => Product.idx, { onDelete: 'CASCADE', nullable: false })
@JoinColumn({name : "product_idx"})
product!: Product
    
@ManyToOne(() => User, User => User.idx, { onDelete: 'CASCADE', nullable: false })
@JoinColumn({name : "user_idx"})
user!: User
    
@CreateDateColumn({ type : "timestamp"})
createdAt!: Date;

@UpdateDateColumn({ type : "timestamp"})
updatedAt!: Date;
}
export default Like;