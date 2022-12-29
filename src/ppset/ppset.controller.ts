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
    return sets
  }

  @Post()
  async createNutritionSet(@Body() setDto: NutritionSetCreateDto){
    const {img_src,header} = setDto;
    const src = this.savePicture(img_src);
    const sets = this.nutritionSetService.createNutritionSet(setDto);
    return sets
  }


  private async savePicture(img){
    const picture = this.nutritionSetService.savePicture(img,"file-name");
    return picture;
  }

}
