import { Component, NgModule, OnInit } from '@angular/core';
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
  iname!: string;
  itype!: string;

  constructor(private insectService:InsectService) { }

  getInsects():void{
    this.insectService.getInsects()
    .subscribe(insects => this.insects = insects)
  }

  addInsect(){
    this.insectService.addInsect({id:this.insects.length+1,name:this.iname, type:this.itype});
  }

  deleteInsect(id:number){
    this.insectService.deleteInsect(id);
    // console.log(this.insects);
  }

  ngOnInit(): void {
    this.getInsects();
    console.log(this.insects);
  }

}
