import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class CatImage{
  id?: string;
  width?: number;
  height?:number;
  url?:string;
}
export class Breed {
  id!: string;
  name?: string;
  origin?:string;
  image?: CatImage;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catApi:string = 'https://api.thecatapi.com/v1';

  constructor(
    private httpClient:HttpClient
  ) { }
  httpHeader = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )
  }

  getBreeds(): Observable<Breed[]>{
    return this.httpClient.get<Breed[]>(this.catApi+'/breeds',this.httpHeader);
  }
}
