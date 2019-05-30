import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AirplaneService} from '../Services/airplane.service';
import {Airplane} from '../Models/airplane.model';

@Component({
  selector: 'app-list-airplane',
  templateUrl: './list-airplane.component.html'
})
export class ListAirplaneComponent implements OnInit {

  airplanes: Airplane[];

  constructor(private router: Router, private airplaneService: AirplaneService) { }

  ngOnInit() {
    this.listAirplane();
  }

  deleteAirplane(airplane: Airplane): void {
    this.airplaneService.deleteAirplane(airplane.id)
    .subscribe(
      data => {
        this.listAirplane();      
      },
      error => {
        this.router.navigate(['list-airplane']);
      });
  }

  editAirplane(airplane: Airplane): void {
    this.router.navigate(['edit-airplane', airplane.id]); 
  }

  addAirplane(): void {
    this.router.navigate(['add-airplane']);
  }

  listAirplane(){
    this.airplaneService.getAirplanes()
      .subscribe( data => {
        this.airplanes = data;
      }); 
  }
}
