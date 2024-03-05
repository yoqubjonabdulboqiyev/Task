import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, ILike, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RlEntity } from './entities/rl.entity';
import { CreateRlDto } from './dto/create-rl.dto';
import { UpdateRlDto } from './dto/update-rl.dto';
import { FilterRlDto } from './dto/filter.dto';
import { UserService } from 'src/user/user.service';
import { RldService } from 'src/rld/rld.service';


@Injectable()
export class RlService {
  constructor(
    @InjectRepository(RlEntity)
    private readonly rlRepository: Repository<RlEntity>,
    readonly userService: UserService,
    readonly rldService: RldService
  ) { }
  async create(createRlDto: CreateRlDto) {
    const newRl = await this.rlRepository.create(createRlDto);
    const rl = await this.rlRepository.save(newRl);
    return rl;
  }

  async findAll(findRlDto: FilterRlDto, req) {

    const { membership_status, region_id, assembly_id, page, limit } = findRlDto;
    const id = Number(findRlDto.id);
    const user = await this.userService.findPhone(req.user);
    const filter: FindOptionsWhere<RlEntity> | FindOptionsWhere<RlEntity>[] = {
      ...(membership_status ? { membership_status: ILike(`%${membership_status}%`) } : {}),
      ...(assembly_id ? { assembly_id } : {}),
      ...(region_id ? { locus_members: [{ region_id: +region_id }] } : {}),
      ...(id ? { id } : {}),
    };
    console.log(user);
    console.log(region_id);
    
    
    const paginnation = limit ? { skip: ((+page) - 1) * (+limit), take: (+limit) } : { skip: ((+page) - 1) * 1000, take: 1000 };
    if (user.role == 'admin') {
      return await this.rlRepository.find({ relations: { locus_members: true }, where: filter, ...paginnation, });
    }
    else if (user.role == 'normal') {
      return await this.rlRepository.find({ select: { locus_members: true }, where: filter, ...paginnation });
    }
    else if (user.role == 'limeted' && (+region_id == 86118093 || +region_id == 86696489 || +region_id == 88186467)) {
      return await this.rlRepository.find({ relations: { locus_members: false }, where: filter, ...paginnation });
    }
    else{
      return [];
    }
  }

  async findOne(id: number) {
    const rl = await this.rlRepository.findOne({
      where: { id: id, isDeleted: false },
      relations: { locus_members: true, },
    });
    return rl;
  }


  async update(id: number, updateRlDto: UpdateRlDto) {
    const { assembly_id, locus_name, locus_start, locus_stop, public_locus_name, chromosome, strand, member_count, urs_taxid, isActive } = updateRlDto;
    const updateRl = {
      ...(assembly_id ? { assembly_id } : {}),
      ...(locus_name ? { locus_name } : {}),
      ...(locus_start ? { locus_start } : {}),
      ...(locus_stop ? { locus_stop } : {}),
      ...(public_locus_name ? { public_locus_name } : {}),
      ...(chromosome ? { chromosome } : {}),
      ...(strand ? { strand } : {}),
      ...(member_count ? { member_count } : {}),
      ...(urs_taxid ? { urs_taxid } : {}),
      ...(isActive ? { isActive } : {})
    };
    const rl = await this.rlRepository.update(id, updateRl);
    return rl;
  }

  async remove(id: number) {
    const deleted = await this.rlRepository.update(id, { isDeleted: true });
    return deleted;
  }
}