import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { Breed, CatService } from '../cat.service';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css']
})
export class CatSearchComponent implements OnInit {

  breeds!: Observable<Breed[]>
  private searchTerm = new Subject<string>();
  constructor( private catService: CatService) { }

  search(term:string):void {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.breeds = this.searchTerm.pipe(
      switchMap((term: string)=> this.catService.search(term))
    )


  }

}
