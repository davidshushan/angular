export default class Person {
   

    constructor(private id:number, public fullName:string, private age:number,  public isMale:boolean=false, public city:string="Tel Aviv", public image: string=""  ) {
        this.setId(id); 
        this.setAge(age);        
    }

    public setAge(age: number){
        if(age >= 0 && age <= 120) this.age = age;    
    }

    public getAge(){
       return this.age;
    }
    public getFullName(){
        return this.fullName;
     }

     public setFullName(name: string){
         this.fullName = name;
     }

    public setId(id: number){
        if(id.toString().length >=8 && id.toString().length <=9) this.id = id;    
    }

    public getId( ){
        return this.id    
    }
   

}