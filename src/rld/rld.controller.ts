import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RldService } from './rld.service';
import { CreateRldDto } from './dto/create-rld.dto';
import { UpdateRldDto } from './dto/update-rld.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/decorators/role';

@ApiTags('rld')
@Controller('rld')
export class RldController {
  constructor(private readonly rldService: RldService) {}

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post()
  create(@Body() createRldDto: CreateRldDto) {
    return this.rldService.create(createRldDto);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.rldService.findAll(+id);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rldService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('Admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRldDto: UpdateRldDto) {
    return this.rldService.update(+id, updateRldDto);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('Admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rldService.remove(+id);
  }
}
