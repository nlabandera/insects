import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Insect, insects } from './insects';

@Injectable({
  providedIn: 'root'
})
export class InsectService {

  insects = insects;
  
  
  constructor() { }

  //Get method using of method
  getInsects():Observable<Insect[]>{
    // const all_insects = of(insects);
    return of(this.insects);
  }
  addInsect(insect:Insect){
    this.insects.push(insect);
    // this.insects.push({name:this.iname, type:this.itype,id:99, description:''});
  }
  deleteInsect(id:number){
    const index: number = insects.indexOf(this.insects[id-1])
    console.log(index);
    this.insects.splice(index,1);
  }
}
