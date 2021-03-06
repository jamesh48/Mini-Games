import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity()
export class IntermediateScore {
  @Field(() => Int)
  @PrimaryKey({ type: 'number' })
  id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: 'text' })
  username!: string;

  @Field(() => Int)
  @Property({ type: 'number' })
  time!: number;
}
