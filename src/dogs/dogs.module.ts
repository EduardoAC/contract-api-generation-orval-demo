import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DogsController } from './dogs.controller';

@Module({
  imports: [HttpModule],
  controllers: [DogsController],
})
export class DogsModule {}
