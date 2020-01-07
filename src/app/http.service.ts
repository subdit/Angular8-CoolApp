import { Injectable } from '@angular/core';
// intergrate the HTTP client within the Http Service
//  to allow us to communicate with a public API
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  // Set constructor to except the Http client by setting it to private 
  constructor(private http: HttpClient) { }
    getBeer() {
      return this.http.get('https://api.openbrewerydb.org/breweries')
    }
  }

