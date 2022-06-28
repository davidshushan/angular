
export default class Business {
   

    constructor( private businessNumber:number,
                 public JobName:string,
                 public numberOfWorkers:number,
                 public avgMonthlyProfit:number,
                ) {
    }

    public setId(id: number){
        if(id>=1000 && id<=5000) this.businessNumber = id;    
    }

    public getId( ){
        return this.businessNumber    
    }

    

}



