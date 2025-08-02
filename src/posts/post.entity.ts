import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostStatusEnum, PostTypeEnum } from './dto/posts.createPost.dto';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 96, nullable: false })
  title!: string;

  @Column({
    type: 'enum',
    enum: PostTypeEnum,
    nullable: false,
    default: PostTypeEnum.POST,
  })
  postType!: PostTypeEnum;

  @Column({
    type: 'enum',
    enum: PostStatusEnum,
    nullable: false,
    default: PostStatusEnum.DRAFT,
  })
  status!: PostStatusEnum;

  @Column({ type: 'varchar', length: 96, nullable: false, unique: true })
  slug!: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'jsonb', nullable: true })
  schema?: string;

  @Column({ type: 'text', nullable: true })
  featureImageUrl?: string;

  @Column({ type: 'timestamp', nullable: false })
  publishedOn!: Date;

  @Column({ type: 'text', array: true, default: () => `'{}'` })
  tags!: string[];

  @Column({ type: 'jsonb', nullable: false, default: () => `'[]'` })
  metaOptions!: Array<{ key: string; value: string }>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
