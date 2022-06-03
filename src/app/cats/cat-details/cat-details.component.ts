import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Breed, CatService, Weight } from '../cat.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  @Input() public breed?: Breed;
  public weight?: Weight;

  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.getCat()
  }

  getCat():void{
    const id = String(this.activeRoute.snapshot.paramMap.get('breedId'));
    this.catService.getCat(id).subscribe(data=> {
      this.breed = data;
    })
  }



}
