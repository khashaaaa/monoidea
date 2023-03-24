import { HttpException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Journalist } from '../journalist/journalist.entity';
import { JournalistService } from '../journalist/journalist.service';
import { NewsType } from '../variant/newstype';
import { UpdateNewsInput } from './input/updatenews.input';
import { News } from './news.entity';

@Injectable()
export class NewsService {

  constructor(@InjectRepository(News) private reppo: Repository<News>, private journalistServ: JournalistService) {}

  async createOne(paramz: any): Promise<News> {
    
    try {
      const resp = await this.reppo.save(paramz)

      return resp
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async showAll(): Promise<News[]> {
    
    try {
      const news = await this.reppo.find()

      return news
    }
    catch(error) {
      throw new HttpException('Алдаа гарлаа', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async showOne(mark: string): Promise<News> {
    
    try {
      const news = await this.reppo.findOne({ where: { mark } })

      if(!news) {
        throw new HttpException('Илэрц олдсонгүй', HttpStatus.NOT_FOUND)
      }

      return news
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async editOne(paramz: UpdateNewsInput): Promise<News> {
    
    try {
      const news = await this.reppo.findOne({ where: { mark: paramz.mark } })

      if(!news) {
        throw new HttpException('Илэрц олдсонгүй', HttpStatus.NOT_FOUND)
      }

      news.title = paramz.title
      news.body = paramz.body
      news.type = paramz.type

      const updated = await this.reppo.save(news)

      return updated
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async removeOne(mark: string): Promise<any> {
    
    try {
      await this.reppo.delete(mark)
      return "Мэдээлэл устгагдлаа";
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async getJournalist(mark: string): Promise<Journalist> {

    try {
      const journalist = await this.journalistServ.showOne(mark)

      if(!journalist) {
        throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.NOT_FOUND)
      }

      return journalist
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async getType(type: NewsType): Promise<any> {

    try {
      const newstype = await this.reppo.findBy({ type })

      return newstype
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

}
