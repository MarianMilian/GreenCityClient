import {BaseService} from './base-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PlaceAddDto} from '../model/placeAddDto.model';

@Injectable({providedIn: 'root'})
export class PlaceService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += 'place';
  }

  save(place: PlaceAddDto) {
    console.log(place);
    this.http.post(`${this.apiUrl}/propose`, place)
      .subscribe(res => console.log('Done'));
  }

}
