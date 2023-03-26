import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { News } from '../news/news.entity';

@Entity()
@ObjectType()
@InputType('CommentInput')
export class Comment {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  mark: number;

  @Column()
  @Field(() => String)
  text: string;

  @Column()
  @Field(() => String)
  user: string;

  @Column()
  @Field(() => News)
  news: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  created: Date;
}
