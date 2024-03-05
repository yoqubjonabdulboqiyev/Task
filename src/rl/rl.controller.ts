import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Req } from '@nestjs/common';
import { RlService } from './rl.service';
import { CreateRlDto } from './dto/create-rl.dto';
import { UpdateRlDto } from './dto/update-rl.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/decorators/role';
import { FilterRlDto } from './dto/filter.dto';

@ApiTags('rl')
@Controller('rl')
export class RlController {
  constructor(private readonly rlService: RlService) { }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post()
  create(@Body() createRlDto: CreateRlDto) {
    return this.rlService.create(createRlDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req: Request, @Query() findRlDto?: FilterRlDto) {
    return this.rlService.findAll(findRlDto, req);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rlService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('Admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRlDto: UpdateRlDto) {
    return this.rlService.update(+id, updateRlDto);
  }

  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Roles('Admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rlService.remove(+id);
  }
}
