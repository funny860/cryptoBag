import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CoindataService } from 'src/app/coindata.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})
export class CoinComponent implements OnInit {
  public coinsData: any[] = [];
  isLoading = false;
  coin_name: string = '';
  constructor(private coindata: CoindataService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.coindata.getCoins().subscribe((coins: any) => {
      // for (let key in coins) {
      //   // this.coinsData.push(coins[key]);
      //   console.log(coins[key]);
      // }
      this.coinsData = coins;
      this.isLoading = false;
    });
    // console.log(Object.keys(this.coinsData));
    // console.log(this.coinsData);
  }

  coinSearch() {}
}
