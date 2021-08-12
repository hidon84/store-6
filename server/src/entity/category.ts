import { BaseEntity, Entity, PrimaryGeneratedColumn, Column ,CreateDateColumn,UpdateDateColumn} from 'typeorm';

@Entity()
class Catetory extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({ length: 45 })
  name!: string;
    
  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default Catetory;