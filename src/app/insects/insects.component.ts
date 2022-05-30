import { Component, NgModule, OnInit } from '@angular/core';
import { InsectService } from '../insect.service';
import { Insect, insects, count } from '../insects';

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
  count = count;

  constructor(private insectService:InsectService) { }

  getInsects():void{
    this.insectService.getInsects()
    .subscribe(insects => this.insects = insects)
  }

  addInsect(){
    this.insectService.addInsect({id:this.count, name:this.iname, type:this.itype});
    console.log('New insect id: '+this.count)
    this.count += 1;
  }

  deleteInsect(index: number){
    this.insectService.deleteInsect(index);
  }
  
  trial(id:number){
    this.insectService.trial(id)
  }

  ngOnInit(): void {
    this.getInsects();
    console.log(this.count);
  }

}
