import { Component, OnInit } from '@angular/core';
import { InsectService } from '../insect.service';
import { Insect, insects } from '../insects';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.css']
})
export class InsectsComponent implements OnInit {

  // insects = insects;
  insects: Insect[]=[]

  constructor(private insectService:InsectService) { }

  getInsect():void{
    this.insectService.getInsects()
    .subscribe(insects => this.insects = insects)
  }

  ngOnInit(): void {
    this.getInsect();
  }

}
