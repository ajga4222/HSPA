import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Array<any> = [
    {
    "Id" : 1,
    "Name" : "Birla House",
    "Type" : "House",
    "Price" : 12000
    },
    {
      "Id" : 2,
      "Name" : "Black House",
      "Type" : "House",
      "Price" : 14000
      },
      {
        "Id" : 3,
        "Name" : "White House",
        "Type" : "House",
        "Price" : 16000
        },
        {
          "Id" : 4,
          "Name" : "Dark House",
          "Type" : "House",
          "Price" : 18000
          },
          {
            "Id" : 5,
            "Name" : "DHA House",
            "Type" : "House",
            "Price" : 24000
            },
            {
              "Id" : 6,
              "Name" : "Model House",
              "Type" : "House",
              "Price" : 29000
              }
  ]
  constructor() { }

  ngOnInit() {
  }

}
