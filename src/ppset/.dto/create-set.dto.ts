export default class NutritionSetCreateDto {
  readonly header:string;
  readonly value:string;
  readonly img_src:string;

  constructor(header,value,img_src){
    this.header = header;
    this.value = value;
    this.img_src = img_src
  }
}