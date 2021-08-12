import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import LoginEntity from './login';

@Entity({ name: 'user' })
class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 320, nullable: true })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column('text', { nullable: true })
  profile: string;

  @OneToOne(() => LoginEntity, loginEntity => loginEntity.idx, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'login_idx' })
  login: LoginEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default UserEntity;
