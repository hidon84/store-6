import { BaseEntity, Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn,CreateDateColumn, UpdateDateColumn} from 'typeorm';
import Login from "./login";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({ length: 320, nullable:true }, )
  email!: string;

  @Column({ length: 20 })
  phone!: string;

  @Column("text", {nullable:true})
  profile!: string;

  @OneToOne(() => Login, Login => Login.idx, { onDelete: 'CASCADE', nullable:false})
  @JoinColumn({name : "login_idx"})
  login!: Login

  @CreateDateColumn({ type : "timestamp"})
  createdAt!: Date;

  @UpdateDateColumn({ type : "timestamp"})
  updatedAt!: Date;
}

export default User;