import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { concatMap, map, mergeMap, Observable, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

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
  httpHeader = {
    headers: new HttpHeaders(
      { 'Content-type': 'application/json' }
    )
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllBreeds(): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(this.catApi + '/breeds', this.httpHeader);
  }

  getBreeds(page?: number, limit?: number, order?: string): Observable<Breed[]> {
    const params_options: any = {};
    if (typeof (page) === "number" && page > -1 && typeof (limit) === "number" && limit > 0) {
      params_options['page'] = page;
      params_options['limit'] = limit;
    }
    const params = new HttpParams({ fromObject: params_options })
    return this.httpClient.get<Breed[]>(this.catApi + '/breeds', { params: params, headers: this.httpHeader.headers });
  }

  getCat(id: string): Observable<Breed> {
    return this.httpClient.get<Breed>(this.catApi + '/breeds/' + id, this.httpHeader);
  }

  search(term: string): Observable<Breed[]> {
    const url = `${this.catApi}/breeds/search?q=`;
    const req = this.httpClient.get<Breed[]>(url+term, this.httpHeader).pipe(
      tap(breed => breed.length ? console.log(`found breeds matching "${term}"`) : console.log(`no breeds matching "${term}"`))
    );
    return req;

  }
}
