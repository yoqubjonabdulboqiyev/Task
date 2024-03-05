import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { FindOptionsWhere, ILike, Like, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayloadType } from 'src/common/types/type';
import { JwtService } from '@nestjs/jwt';
import { FilterDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    readonly jwtService: JwtService
  ) { }
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.find({ where: { phone: createUserDto.phone } });
    
    if (findUser.length>0) {
      throw new HttpException('user already registred', HttpStatus.UNAUTHORIZED,);
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    const newUser = await this.userRepository.create(createUserDto);
    const user = await this.userRepository.save(newUser);
    return user;
  }

  async login(loginDto: LoginDto) {
    const findUser = await this.userRepository.findOne({ where: { phone: loginDto.phone } });
    if (!findUser) {
      throw new HttpException('user not found', HttpStatus.UNAUTHORIZED,);
    }
    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.password,
    );
    if (!checkPassword) {
      throw new HttpException('invalid password', HttpStatus.UNAUTHORIZED,);
    }
    const payload: JwtPayloadType = {
      sub: findUser.phone,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: "salom",
      expiresIn: "24h",
    });

    return token;
  }

  async findAll(findUserDto: FilterDto) {
    const { firstName, lastName, phone, role } = findUserDto;
    const filter: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[] = {
      ...(firstName ? { firstName: ILike(`%${firstName}%`) } : {}),
      ...(lastName ? { lastName: ILike(`%${lastName}%`) } : {}),
      ...(phone ? { phone: Like(`%${phone}%`) } : {}),
      ...(role ? { role } : {}),
    };
    const users = await this.userRepository.find({ where: filter });
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id, isDeleted: false } });
    return user;
  }

  async findPhone(phone: string) {
    const user = await this.userRepository.findOne({ where: { phone: phone, isDeleted: false } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { firstName, lastName, phone, role, isActive } = updateUserDto;
    let { password } = updateUserDto;
    if (password) {
      password = await bcrypt.hash(password, 12);
    }
    const updateUser = {
      ...(firstName ? { firstName } : {}),
      ...(lastName ? { lastName } : {}),
      ...(phone ? { phone } : {}),
      ...(role ? { role } : {}),
      ...(isActive ? { isActive } : {}),
    };
    const user = await this.userRepository.update(id, updateUser);
    return user;
  }

  async remove(id: number) {
    const deleted = await this.userRepository.update(id, { isDeleted: true });
    return deleted;
  }
}