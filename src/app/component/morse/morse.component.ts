import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse',
  templateUrl: './morse.component.html',
  styleUrls: ['./morse.component.css']
})
export class MorseComponent implements OnInit {

  text: string = "Example";
  
  constructor() { }

  ngOnInit(): void {
  }

}
