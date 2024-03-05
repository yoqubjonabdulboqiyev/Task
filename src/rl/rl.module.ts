import { Module } from '@nestjs/common';
import { RlService } from './rl.service';
import { RlController } from './rl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RlEntity } from './entities/rl.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { RldModule } from 'src/rld/rld.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RlEntity]),
    JwtModule.register({}),
    UserModule,
    RldModule
  ],
  controllers: [RlController],
  providers: [RlService],
})
export class RlModule {}
