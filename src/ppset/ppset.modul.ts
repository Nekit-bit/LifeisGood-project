import {Column, DataType, Model,Table, BelongsToMany, BelongsTo} from 'sequelize-typescript' 

interface NutritionSetCreate {
  header:string,
  value:string,
  img_src: string,
}

@Table({tableName: "nutrition_set", createdAt:false})
export class NutritionSet extends Model<NutritionSet,NutritionSetCreate>{
  @Column({type:DataType.INTEGER,unique: true,autoIncrement: true, primaryKey: true, allowNull: false})
  id: number;

  @Column({type:DataType.STRING, unique:true})
  header:string

  @Column({type:DataType.STRING, unique:true})
  value:string

  @Column({type:DataType.STRING, unique:true})
  img_src:string
}