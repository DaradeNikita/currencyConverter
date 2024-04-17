import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './shared/services/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
countrArr!:any;
baseCurrency!: string;
targetCurrency!:string;
amount:number = 1;
result : number = 0;


constructor(private _currency : CurrencyService,
 
){}
 
 
  ngOnInit(): void {
   this._currency.getAllCountries()
   .subscribe(res =>{
    // console.log(res);
    this.countrArr = res
   })
  }




onConvert(){
 this._currency.getChangeCurrency(this.baseCurrency)
 .subscribe(res =>{
  console.log(res);
  this.result = res.conversion_rates[this.targetCurrency] * this.amount
  console.log(this.result);
  
 })
}

}
