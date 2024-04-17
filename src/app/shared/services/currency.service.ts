import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
baseUrl = `https://v6.exchangerate-api.com/v6/487e41b8790c1511ec0a04c4/latest/USD`;
countryUrl =`https://v6.exchangerate-api.com/v6`;
apiKey = `487e41b8790c1511ec0a04c4`;


constructor(private _http : HttpClient) { }


  getAllCountries():Observable<any>{
    return this._http.get<any>(`${this.baseUrl}`)
    .pipe(
      map((res : any) =>{
        console.log(res);
        let countriesArr=[];
        for (const key in res.conversion_rates) {
     
        countriesArr.push([key])
        }
        console.log(countriesArr);
        return countriesArr
      })
    )
  }

getChangeCurrency(baseCurrency : string):Observable<any>{
let currencyUrl = `${this.countryUrl}/${this.apiKey}/latest/USD`;
return this._http.get<any>(currencyUrl)
}
      

}
