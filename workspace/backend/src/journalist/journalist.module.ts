import { Module } from '@nestjs/common';
import { JournalistService } from './journalist.service';
import { JournalistResolver } from './journalist.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Journalist } from './journalist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Journalist])
  ],
  providers: [JournalistResolver, JournalistService],
  exports: [JournalistService]
})
export class JournalistModule {}
