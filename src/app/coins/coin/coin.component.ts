import { Component, OnInit } from '@angular/core';
import { CoindataService } from 'src/app/coindata.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})
export class CoinComponent implements OnInit {
  coinsData: any = [];
  isLoading = false;
  constructor(private coindata: CoindataService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.coindata.getCoins().subscribe((coins: any) => {
      for (let key in coins) {
        this.coinsData.push(coins[key]);
      }
      this.isLoading = false;
    });
  }
}
