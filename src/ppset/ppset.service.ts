import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NutritionSet } from './ppset.modul';
import NutritionSetCreateDto from "./.dto/create-set.dto"
import { createFile,getFile } from 'src/file-api/file-storage';
import { createHash } from 'crypto';
 

@Injectable()
export class PpsetService {
  constructor(@InjectModel(NutritionSet) private setRepository: typeof NutritionSet){}

  async getAllNutritionSet(){
    return await this.setRepository.findAll();
  }

  async createNutritionSet(path: string, fileName: string,header:string,value:string,data: string){
    var hash = createHash('sha256').update(fileName).digest('hex') 
    path =`${path}/${hash}`
    const file = await this.createNewsFile(path, data);
    console.log(file)
    if(!file){
      return 0;
    }
    console.log(path)
    const dto = new NutritionSetCreateDto(header,value,path)
    const set = await this.setRepository.create(dto);
    return set;
  }

  private async createNewsFile(path: string, data: string){
    return createFile(path, data);
  }  
}
