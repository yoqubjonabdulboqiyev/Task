import { Module } from '@nestjs/common';
import { RldService } from './rld.service';
import { RldController } from './rld.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RldEntity } from './entities/rld.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RldEntity]),
    JwtModule.register({}),
    UserModule
  ],
  controllers: [RldController],
  providers: [RldService],
  exports: [RldService]
})
export class RldModule { }
