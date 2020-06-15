import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      "id": 1,
      "name": "Birla House",
      'type': 'House',
      'price': 12000
    },
    {
      "id": 2,
      "name": "Erose Villa",
      'type': 'Villa',
      'price': 14000
    },
    {
      "id": 3,
      "name": "Mark Hill",
      'type': 'Flat',
      'price': 12500
    },
    {
      "id": 4,
      "name": "Gun Hill",
      'type': 'Duplex',
      'price': 11400
    },
    {
      "id": 5,
      "name": "Macro House",
      'type': 'House',
      'price': 14300
    },
    {
      "id": 6,
      "name": "Pearl White House",
      'type': 'House',
      'price': 18000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
