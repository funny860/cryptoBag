import { Component, OnInit } from '@angular/core';
import { CoinComponent } from './coin/coin.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class CoinsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
