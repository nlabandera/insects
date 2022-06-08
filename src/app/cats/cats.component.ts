import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService, Breed, CatImage } from './cat.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  breeds: Breed[] = [];
  displayedColumns: string[] = ['breeds', 'country_code', 'more_info'];
  table_size: number = 0;
  page_size: number = 5;
  page_size_options: number [] = [5,10]
  constructor(
    public catService: CatService,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.getBreeds();

  }

  ngAfterViewInit(): void {
    console.log(this.paginator);
    this.paginator?.page.subscribe(pageEvent => {
      console.log(pageEvent);
      this.catService.getBreeds(pageEvent.pageIndex, pageEvent.pageSize).subscribe(data => {
        this.breeds = data;
        this.cdr.detectChanges();
        console.log('this.breeds: ' + this.breeds);
      });
    });
  }

  getBreeds() {

    // First call: request all to inicialize total size:
    this.catService.getBreeds().subscribe(res => {
      this.table_size = res.length;
    });

    // Second call: request default table breeds
    this.catService.getBreeds(0, this.page_size).subscribe(res => {
      this.breeds = res;
    });
  }

}
