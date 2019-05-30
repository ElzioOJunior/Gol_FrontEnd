import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Airplane} from '../models/airplane.model';
import {AirplaneDto} from '../models/airplane.modelDto';

@Injectable()
export class AirplaneService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:5001/api/v1/airplanes';

  getAirplanes() {
    return this.http.get<Airplane[]>(this.baseUrl);
  }

  getAirplaneById(id: number) {
    return this.http.get<Airplane>(this.baseUrl + '/' + id);
  }

  createAirplane(airplane: AirplaneDto) {
    return this.http.post(this.baseUrl, airplane);
  }

  updateAirplane(id: string, airplane: Airplane) {
    airplane.id = id;
    return this.http.put(this.baseUrl + '/' + id, airplane);
  }

  deleteAirplane(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
