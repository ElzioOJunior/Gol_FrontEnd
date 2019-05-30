import { Component, OnInit } from '@angular/core';
import { AirplaneService } from './../Services/airplane.service';
import {ActivatedRoute, Params, Router } from '@angular/router';
import {Airplane} from '../Models/airplane.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-airplane',
  templateUrl: './edit-airplane.component.html',
  styleUrls: ['./edit-airplane.component.css']
})
export class EditAirplaneComponent implements OnInit {

  airplane: Airplane;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private active : ActivatedRoute,  private router: Router, private airplaneService: AirplaneService) { }

  ngOnInit() {
    const routeParams = this.active.snapshot.params
    const airplaneId = routeParams.id;
    
    if (!airplaneId ) {
      alert('Id Inválido.');
      this.router.navigate(['list-airplane']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      codigoAviao: ['', Validators.required],
      modelo: ['', Validators.required],
      qtdPassageiros: ['', Validators.required]
    });
    this.airplaneService.getAirplaneById(airplaneId)
      .subscribe( data => {
        this.addForm.setValue(data);
      });
  }

  onSubmit() {

    const routeParams = this.active.snapshot.params
    const airplaneId = routeParams.id;
    
    this.airplaneService.updateAirplane(airplaneId, this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert('Airplane gravado com sucesso.');          
          this.router.navigate(['list-airplane']);
        },
        error => {
          alert(error);
        });
  }
}
