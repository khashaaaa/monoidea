import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { News } from '../news/news.entity';

@Entity()
@ObjectType()
@InputType('JournalistInput')
export class Journalist {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  mark: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  mobile: string;

  @OneToMany(() => News, (news) => news.journalist)
  @Field(() => [News], { nullable: true })
  news?: News[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  created: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  updated: Date;
}
