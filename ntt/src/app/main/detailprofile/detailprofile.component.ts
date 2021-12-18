import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import {ApiService} from '../../services/api.service' 
@Component({
  selector: 'app-detailprofile',
  templateUrl: './detailprofile.component.html',
  styleUrls: ['./detailprofile.component.css']
})
export class DetailprofileComponent implements OnInit {
  userId = window.localStorage.getItem('id');
  name = window.localStorage.getItem('name');
  listUsers:any = Array();
  comments:number =0;

  constructor(
    private restApi : ApiService, 
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.getPost();

  }
  getPost()
  {
    this.restApi.getTypeRequest('users/'+this.userId).subscribe((res: any) => { 
      this.listUsers = res; 
    });
  }
  // totalComments(dataPost : any )
  // {
  //   for(let i = 0; i<= this.listPost.length; i++)
  //   {
  //       this.restApi.getTypeRequest('posts/'+this.listPost[i].id+ '/comments').subscribe((res: any) => { 
  //         console.log(res);
  //         this.listPost[i].totalComments = res.length;
  //         console.log(this.listPost);
  //       // this.listPost = res;  
  //       // this.totalComments(this.listPost);
  //     });
  //   }

  // }
}
