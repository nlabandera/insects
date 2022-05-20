import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Insect, insects } from '../insects';

@Component({
  selector: 'app-insect-details',
  templateUrl: './insect-details.component.html',
  styleUrls: ['./insect-details.component.css']
})
export class InsectDetailsComponent implements OnInit {

  insect: Insect | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    //Get insect id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const insectIdFromRoute = Number(routeParams.get('insectId'));
    //Find the insect that correspond with the id provided in the route
    this.insect = insects.find(insect => insect.id === insectIdFromRoute);
  }

}
