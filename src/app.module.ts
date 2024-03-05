import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RlModule } from './rl/rl.module';
import { RldModule } from './rld/rld.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hh-pgsql-public.ebi.ac.uk',
      port: 5432,
      username: 'reader',
      password: 'NWDMCE5xdipIjRrp',
      database: 'pfmegrnargs',
      entities: ['dist/**/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    RlModule,
    RldModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
