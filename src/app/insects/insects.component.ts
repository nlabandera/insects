import { Component, OnInit } from '@angular/core';
import { insects } from '../insects';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.css']
})
export class InsectsComponent implements OnInit {

  insects = insects;

  constructor() { }

  ngOnInit(): void {
  }

}
