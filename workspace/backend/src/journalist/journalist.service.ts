import { HttpException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginInput } from './input/loginjournalist.input';
import { UpdateJournalistInput } from './input/updatejournalist.input';
import { Journalist } from './journalist.entity';

@Injectable()
export class JournalistService {

  constructor(@InjectRepository(Journalist) private reppo: Repository<Journalist>) {}

  async login(paramz: LoginInput): Promise<any> {

    try {
      const resp = await this.reppo.findOneBy({ email: paramz.email, mobile: paramz.mobile })

      return resp
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async createOne(paramz: any): Promise<Journalist> {
    
    try {
      const resp = await this.reppo.save(paramz)

      return resp
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async showAll(): Promise<Journalist[]> {
    
    try {
      const journalists = await this.reppo.find()

      return journalists
    }
    catch(error) {
      throw new HttpException('Алдаа гарлаа', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async showOne(mark: string): Promise<Journalist> {
    
    try {
      const journalist = await this.reppo.findOne({ where: { mark } })

      if(!journalist) {
        throw new HttpException('Илэрц олдсонгүй', HttpStatus.NOT_FOUND)
      }

      return journalist
    }
    catch(error) {
      throw new HttpException('Мэдээлэлээ дахин шалгана уу', HttpStatus.BAD_REQUEST)
    }
  }

  async editOne(paramz: UpdateJournalistInput): Promise<Journalist> {
    
    try {
      const journalist = await this.reppo.findOne({ where: { mark: paramz.mark } })

      if(!journalist) {
        throw new HttpException('Илэрц олдсонгүй', HttpStatus.NOT_FOUND)
      }

      journalist.name = paramz.name
      journalist.email = paramz.email
      journalist.mobile = paramz.mobile

      const updated = await this.reppo.save(journalist)

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
  
}
