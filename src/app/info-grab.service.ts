import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoGrabService {
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/GriptapeAdventure/json/eventLists.json';

  constructor(private http: HttpClient) { }


  public getData() : Observable<any> {
   return this.http.get(this.url);
  }
}
