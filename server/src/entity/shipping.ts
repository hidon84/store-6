import { BaseEntity, Entity, PrimaryGeneratedColumn, Column ,CreateDateColumn,UpdateDateColumn ,ManyToOne,JoinColumn} from 'typeorm';
import User from "./user";

@Entity()
class Shipping extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({ length: 45 })
  name!: string;

  @Column({ length: 200})
  address!: string;
    
  @ManyToOne(() => User, User => User.idx, { onDelete: 'CASCADE'})
  @JoinColumn({name : "user_idx"})
  user!: User;
    
  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default Shipping;