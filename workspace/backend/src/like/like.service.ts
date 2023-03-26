import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLikeInput } from './input/createlike.input';
import { Like } from './like.entity';

@Injectable()
export class LikeService {

  constructor(@InjectRepository(Like) private reppo: Repository<Like>) {}

  async createOne(createLikeInput: CreateLikeInput): Promise<Like> {
    
    try {
      const resp = await this.reppo.save(createLikeInput)

      return resp
    }
    catch(error) {
      throw new HttpException('Алдаа гарлаа', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async removeOne(mark: number): Promise<any> {
    
    try {
      return await this.reppo.delete(mark);
    }
    catch(error) {
      throw new HttpException('Алдаа гарлаа', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
