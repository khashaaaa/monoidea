import { HttpException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentInput } from './input/createcomment.input';

@Injectable()
export class CommentService {

  constructor(@InjectRepository(Comment) private reppo: Repository<Comment>) {}

  async createOne(createCommentInput: CreateCommentInput): Promise<Comment> {
    
    try {
      const resp = await this.reppo.save(createCommentInput)
      
      return resp
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async showAll(): Promise<Comment[]> {
    
    try {
      const comments = await this.reppo.find()

      return comments
    }
    catch(error) {
      throw new HttpException('Алдаа гарлаа', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async showAllByNews(news: string): Promise<Comment[]> {

    try {
      const resp = await this.reppo.find({ where: { news } })

      if(!resp) {
        throw new HttpException('Илэрц олдсонгүй', HttpStatus.NOT_FOUND)
      }

      return resp
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }
}
