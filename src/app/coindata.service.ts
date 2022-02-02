import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoindataService {
  constructor(private http: HttpClient) {}

  getCoins() {
    return this.http.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    // .pipe(
    //   map((responseData) => {

    //     return ;
    //   })
    // );
  }
}
