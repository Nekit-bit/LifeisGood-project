import { Controller } from '@nestjs/common';
import { Get,Post,Body } from '@nestjs/common/decorators';
import NutritionSetCreateDto from './.dto/create-set.dto';
import { PpsetService } from './ppset.service';

@Controller('ppset')
export class PpsetController {
  constructor(private nutritionSetService: PpsetService ){}

  @Get()
  async getAllNutritionSet(){
    const sets = await this.nutritionSetService.getAllNutritionSet();
    []
    return sets
  }

  @Post()
  async createNutritionSet(@Body() setDto: NutritionSetCreateDto){
    const {header,value,img_src} = setDto
    const sets = this.nutritionSetService.createNutritionSet('setPng', header, header, value, img_src);
    return sets
  }

}
