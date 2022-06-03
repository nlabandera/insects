import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CatImage {
  public id?: string;
  public width?: number;
  public height?: number;
  public url?: string;
}
export class Weight {
  imperial?: string;
  metric?: string;
}
export class Breed {

    public id?: string;
    public name?: string;
    public origin?: string;
    public country_code?: string;
    public image?: CatImage;
    public weight?: Weight;
    public temperament?: string;
    public wiki_url?: string;
    public life_span?: string;
    public description?: string;
    public reference_image_id?: string;

}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catApi: string = 'https://api.thecatapi.com/v1';

  constructor(
    private httpClient: HttpClient
  ) { }
  httpHeader = {
    headers: new HttpHeaders(
      { 'Content-type': 'application/json' }
    )
  }

  getBreeds(): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(this.catApi + '/breeds', this.httpHeader);
  }

  getCat(id: string): Observable<Breed> {
    return this.httpClient.get<Breed>(this.catApi + '/breeds/' + id, this.httpHeader);
  }
}
