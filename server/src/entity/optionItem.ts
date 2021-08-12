import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import Option from "./option";

@Entity()
class OptionItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({ length: 45 })
  name!: string;
    
  @ManyToOne(() => Option, Option => Option.idx, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({name : "option_idx"})
  option!: Option
    
  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default OptionItem;