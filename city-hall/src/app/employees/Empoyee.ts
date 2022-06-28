import Person from "../person";
import { Status } from "../models/status.enum";
export default class Emloyee extends Person{
   

    constructor( id:number,
                 fullName:string,
                 age:number,
                 isMale:boolean=false,
                 city:string="Tel Aviv",
                 image: string="",
                 public jobTitle: string,
                 public hoursPerMonth: number,
                 public salaryPerHour:number  ) {
       super(id,fullName, age, isMale, city,image);
    }
    

}