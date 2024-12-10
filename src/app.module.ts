import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikulasModule } from './mikulas/mikulas.module';

@Module({
  imports: [MikulasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
