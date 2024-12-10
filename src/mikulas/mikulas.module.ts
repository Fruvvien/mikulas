import { Module } from '@nestjs/common';
import { MikulasService } from './mikulas.service';
import { MikulasController } from './mikulas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MikulasController],
  providers: [MikulasService, PrismaService],
})
export class MikulasModule {}
