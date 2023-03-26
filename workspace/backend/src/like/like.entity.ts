import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
@InputType('LikeInput')
export class Like {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  mark: number;

  @Column()
  @Field(() => String)
  news: string;

  @Column()
  @Field(() => String)
  ipaddr: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date)
  created: Date;
}
