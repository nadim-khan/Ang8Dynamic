import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  personData:any[] = [
    {id:1,name:"Nadeem Khan",country:"India",age:25},
    {id:2,name:"John Doe",country:"America",age:15},
    {id:3,name:"Shyam Kumar",country:"Bangladesh",age:25},
    {id:4,name:"Aamir Khan",country:"Saudi",age:35},
    {id:5,name:"Nadeem Khan",country:"India",age:25},
    {id:6,name:"John Doe",country:"America",age:35},
    {id:7,name:"Shyam Kumar",country:"Bangladesh",age:25},
    {id:8,name:"Aamir Khan",country:"Saudi",age:35},
    {id:9,name:"Nadeem Khan",country:"India",age:12},
    {id:10,name:"John Doe",country:"America",age:15},
    {id:11,name:"Shyam Kumar",country:"Bangladesh",age:25},
    {id:12,name:"Aamir Khan",country:"Saudi",age:15},
    {id:13,name:"Nadeem Khan",country:"India",age:25},
    {id:14,name:"John Doe",country:"America",age:15},
    {id:15,name:"Shyam Kumar",country:"Bangladesh",age:25},
    {id:16,name:"Aamir Khan",country:"Saudi",age:35},
  ];

  getColor(country,age){
    switch(country){
      case "India" :
      return 'blue';
      case "America" :
      return 'brown';
      case "Bangladesh" :
      return 'purple';
      case "Saudi" :
      return 'green';
    }
    
  }

}
