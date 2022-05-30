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
  }
  deleteInsect(id:number){
    this.insects.splice(id,1);
    console.log(id);
  }
  trial(id:number){
    const target = this.insects.find(insect => insect.id === id);
    console.log(target);
  }
}
