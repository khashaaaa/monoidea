import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { Journalist } from '../journalist/journalist.entity';
import { NewsType } from '../variant/newstype';

@Entity()
@ObjectType()
@InputType('NewsInput')
export class News {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  mark: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  body: string;

  @Column()
  @Field()
  imagelink: string;

  @Column()
  @Field()
  markJournalist: string;

  @ManyToOne(() => Journalist, (journalist) => journalist.news)
  @Field(() => String)
  journalist: string;

  @Column({ type: 'enum', enum: NewsType })
  @Field(() => NewsType)
  type: NewsType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  created: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  updated: Date;
}
