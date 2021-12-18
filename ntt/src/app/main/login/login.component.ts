import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
 
@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
}) 
export class LoginComponent implements OnInit { 
  form: FormGroup ;
  constructor( 
    public fb: FormBuilder,
    private _api : ApiService, 
    private _auth: AuthService, 
    private router: Router, 
  ) { } 
 
  ngOnInit(): void { 
    this.form = this.fb.group({ 
      username: ['', Validators.required], 
      password:['', Validators.required] 
    }); 
  } 
 
  login(){ 
    let data = this.form.value 
    console.log(data.username);
    this._api.login('users',data).subscribe((res: any) => { 
     var  a= res[0];

      // if(res.toString().indexOf("0" ) >=0){ 
      //   console.log("password bener");
      //   this._auth.setDataInLocalStorage('token', res.access_token) 
      //   this.router.navigate(['profile']); 
      // }
      // else{
      //   window.alert("username salah ");
      // }

      // for( let i = 0; i< res.length; i++)
      // {
      //   var username = res[i] = Array();
      //   if(username.indexOf(data.username) >=0)
      //   {
      //     console.log();
      //   }
      //   else{
      //     console.log("momo");
      //   }
      // }
      const result = res.find( ({ username } :{username:any}) => username === data.username );
      console.log(result,"hasilnya");
      if(result != undefined)
      {
      //   console.log("password bener");
        this._auth.setDataInLocalStorage('id', result.id) ;
        this._auth.setDataInLocalStorage('name', result.name) ;

      //  var u = this._auth.getLogin();
      var  u =  window.localStorage.getItem('id');
       console.log("isi u", u);
        this.router.navigate(['profile']); 
      }
      else
      {
        window.alert("username salah ");
      }
    }, err => { 
      console.log(err) 
    }); 
  } 
}