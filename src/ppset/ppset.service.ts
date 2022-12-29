import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NutritionSet } from './ppset.modul';
import NutritionSetCreateDto from "./.dto/create-set.dto"
import { createFile } from 'src/file-api/file-storage';


@Injectable()
export class PpsetService {
  constructor(@InjectModel(NutritionSet) private setRepository: typeof NutritionSet){}

  createNutritionSet(dto: NutritionSetCreateDto){
    return  this.setRepository.create(dto);
  }

  async getAllNutritionSet(){
    return await this.setRepository.findAll();
  }

  async savePicture(img,name){
    const save = createFile(name,img);
    if(save){
      return name
    }
  }


  
}
