import { Injectable } from '@angular/core'; 
 
@Injectable({ 
    providedIn: 'root' 
}) 
export class AuthService { 
    constructor() { 
    } 
 
    getUserDetails() { 
        return localStorage.getItem('userInfo') ===null; 
    } 
     
    setDataInLocalStorage(variableName: string, data: string) { 
        localStorage.setItem(variableName, data); 
    } 
 
    getToken() { 
        return localStorage.getItem('token'); 
    } 
    getLogin()
    {
      return localStorage.getItem('id');
    }
    clearStorage() { 
        localStorage.clear(); 
    } 
}