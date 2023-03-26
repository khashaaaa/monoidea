import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../variant/newstype';

@Entity()
@ObjectType()
@InputType('NewsInput')
export class News {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  mark: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  body: string;

  @Column()
  @Field(() => String)
  imagelink: string;

  @Column()
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
