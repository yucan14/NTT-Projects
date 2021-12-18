import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import {ApiService} from '../../services/api.service' 
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId = window.localStorage.getItem('id');
  name = window.localStorage.getItem('name');
  listPost:any = Array();
  comments:number =0;



  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];
  constructor(
    private restApi : ApiService, 
    private router: Router, 

  ) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost()
  {
    this.restApi.getTypeRequest('posts').subscribe((res: any) => { 
      this.listPost = res; 
      this.totalComments(this.listPost);
    });
  }
  totalComments(dataPost : any )
  {
    for(let i = 0; i<= this.listPost.length; i++)
    {
        this.restApi.getTypeRequest('posts/'+this.listPost[i].id+ '/comments').subscribe((res: any) => { 
          console.log(res);
          this.listPost[i].totalComments = res.length;
          console.log(this.listPost);
        // this.listPost = res;  
        // this.totalComments(this.listPost);
      });
    }

  }



  handlePageChange(event :any){
    this.page = event;
  }
  detail(id:any)
  {
    this.router.navigate(['detailpost/'+id],{
      state: id,
    });  
  }
  detailProfile()
  {
    this.router.navigate(['detailprofile'],{

    });  
  }
}
