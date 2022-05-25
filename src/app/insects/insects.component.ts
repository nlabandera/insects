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
  insects: Insect[]=[];
  iname: string = "";
  itype: string = "";

  constructor(private insectService:InsectService) { }

  getInsect():void{
    this.insectService.getInsects()
    .subscribe(insects => this.insects = insects)
  }

  addInsect(){
    this.insectService.addInsect({name:this.iname, type:this.itype,id:99});
  }

  ngOnInit(): void {
    this.getInsect();
  }

}
