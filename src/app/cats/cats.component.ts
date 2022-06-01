import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService, Breed, CatImage } from './cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  breeds:any = [];
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.getBreeds()
    console.log(this.breeds.id)
  }

  getBreeds(){
    this.catService.getBreeds().subscribe(res=>{
      this.breeds = res;
      console.log(res)
    })
  }

}
