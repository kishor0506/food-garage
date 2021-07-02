export default class Product {
    constructor(pid:any,prdname:string,description:string,cost:any, type:string){
        this.prdname = prdname;
        this.pid = pid;
        this.description=description;
        this.cost=cost;
        this.type=type;
    }
    pid:any=0;
    prdname:string="";
    description:string="";
    cost:any="";
    type:string="";

}
