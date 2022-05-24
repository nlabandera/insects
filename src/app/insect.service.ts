import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Insect, insects } from './insects';

@Injectable({
  providedIn: 'root'
})
export class InsectService {

  constructor() { }

  //Get method using of method
  getInsects():Observable<Insect[]>{
    // const all_insects = of(insects);
    return of(insects);
  }
}
