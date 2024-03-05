import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRldDto } from './dto/create-rld.dto';
import { UpdateRldDto } from './dto/update-rld.dto';
import { RldEntity } from './entities/rld.entity';


@Injectable()
export class RldService {
  constructor(
    @InjectRepository(RldEntity)
    private readonly rldRepository: Repository<RldEntity>
  ) { }
  async create(createRldDto: CreateRldDto) {
    const newRld = await this.rldRepository.create(createRldDto);
    const rld = await this.rldRepository.save(newRld);
    return rld;
  }

  async findAll(id: number) {
    const rlds = await this.rldRepository.find({ where: { locus_member_id: id } });
    return rlds;
  }

  async findOne(id: number) {
    const rld = await this.rldRepository.findOne({ where: { id: id, isDeleted: false } });
    return rld;
  }
  async update(id: number, updateRldDto: UpdateRldDto) {
    const { region_id, membership_status, locus_id } = updateRldDto;
    const updateRld = {
      ...(region_id ? { region_id } : {}),
      ...(membership_status ? { membership_status } : {}),
      ...(locus_id ? { locus_id } : {})
    };
    const rld = await this.rldRepository.update(id, updateRld);
    return rld;
  }

  async remove(id: number) {
    const deleted = await this.rldRepository.update(id, { isDeleted: true });
    return deleted;
  }
}