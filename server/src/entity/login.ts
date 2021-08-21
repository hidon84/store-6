import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'login' })
@Unique(['id', 'type'])
class LoginEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 45 })
  id: string;

  @Column('text')
  password: string;

  @Column({ length: 20, default: 'OWN' })
  type: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export default LoginEntity;
