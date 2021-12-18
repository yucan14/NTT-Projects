import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import {ApiService} from '../../services/api.service' 

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.css']
})
export class DetailpostComponent implements OnInit {
  userId = window.localStorage.getItem('id');
  name = window.localStorage.getItem('name');
  listPost:any = Array();
  comments:number =0;
  params:any =0;
  hideComments:boolean    = false;
  listComments:any = Array();

  constructor(
    private restApi : ApiService, 
    private router: Router, 
    private activateRoute : ActivatedRoute,

  ) { 
    this.activateRoute.params.subscribe(params => {
console.log("value params", params);
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.getPost();
    this.totalComments(this.params.id);

  }
  getPost()
  {
    this.restApi.getTypeRequest('posts/'+this.params.id).subscribe((res: any) => { 
      this.listPost = res; 
      console.log("listpostgetpots", this.listPost);
    });
  }
  totalComments(dataPost : any )
  {

        this.restApi.getTypeRequest('posts/'+ dataPost+ '/comments').subscribe((res: any) => { 
          console.log(res);
          this.listPost.totalComments = res.length;
          console.log("total comments", this.listPost);
        this.listComments = res;  
        // this.totalComments(this.listPost);
      });
    

  }
  showComments()
  {
    this.hideComments = true;
    
  }
}
