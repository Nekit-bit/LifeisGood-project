import { Module } from '@nestjs/common';
import { PpsetService } from './ppset.service';
import { PpsetController } from './ppset.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { NutritionSet } from './ppset.modul';

@Module({
  providers: [PpsetService],
  controllers: [PpsetController],
  imports:[
    SequelizeModule.forFeature([NutritionSet])
  ]
})
export class PpsetModule {}
