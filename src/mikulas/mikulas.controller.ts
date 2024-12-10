import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { MikulasService } from './mikulas.service';
import { CreateMikulaDto } from './dto/create-mikula.dto';
import { UpdateMikulaDto } from './dto/update-mikula.dto';
import { error } from 'console';

@Controller('mikulas')
export class MikulasController {
  constructor(private readonly mikulasService: MikulasService) {}

  @Post()
  create(@Body() createMikulaDto: CreateMikulaDto) {
    return this.mikulasService.create(createMikulaDto);
  }

  @Get()
  findAll() {
    return this.mikulasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findOne = await this.mikulasService.findOne(+id);
   if (findOne == null){
    throw new NotFoundException("nem létezik az adott id")
   }else{
    return findOne
   };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMikulaDto: UpdateMikulaDto) {
   
    try{
      const findOne = await this.mikulasService.update(+id, updateMikulaDto);
      return findOne
    }
    catch{
      throw new NotFoundException("nem létezik az adott id");
    };
  }

  @Delete(':id')
  async  remove(@Param('id') id: string) {
    try{
      const findOne = await this.mikulasService.remove(+id);
      return findOne
    }
    catch{
      throw new NotFoundException("nem létezik az adott id");
     
    };
  }


}
