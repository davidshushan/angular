import Person from "../../person";
import { Status } from "../../models/status.enum";
export default class Resident extends Person{
   

    constructor( id:number, fullName:string,  age:number,  isMale:boolean=false, city:string="Tel Aviv", image: string="", public address: string, public year: number, public status: Status  ) {
       super(id,fullName, age, isMale, city,image);
    }
    

}