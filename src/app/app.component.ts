import { Component } from '@angular/core';

import { GarageService } from './garage.service'

import { OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GarageService]
})
export class AppComponent implements OnInit {
  title = 'garage-app';
  cars: Object

  constructor(private garageService: GarageService) {

  }

  ngOnInit() {
    console.log('On init...')
    this.garageService.getCars().subscribe((data) => {
      this.cars = data
    })
    
  }
}
