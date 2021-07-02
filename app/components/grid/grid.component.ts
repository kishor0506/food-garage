import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Car from 'src/app/model/car';
import product from 'src/app/model/product';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  cars:Car[]= [];
  

  @Input()
  products:Product[] =[];
  @Output()
 public eaddprd:EventEmitter<Product>=new EventEmitter<product>();

  public product:Product=new Product(0,'','',0,"odd");;
 
  
  constructor() { }


  ngOnInit(): void {
  }

  handleadd(pid:any,prdname:string,description:string,cost:any){
    console.log(pid);
    this.product =new Product(pid,prdname,description,cost,this.checkoddeven(pid));
    console.log(JSON.stringify(this.product));
    this.eaddprd.emit(this.product);

  }
  checkoddeven(check:number){
    return check %2==0?"even":"odd";
  }
}

