import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/"; 
  constructor(private httpClient: HttpClient) { } 
  getTypeRequest(url: string) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })); 
  } 
  login(url: string, data: any) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })); 
  } 
  postTypeRequest(url: string, payload: any) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })); 
  } 
 
  putTypeRequest(url: string, payload: any) { 
    return this.httpClient.put(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })) 
  }   
}
