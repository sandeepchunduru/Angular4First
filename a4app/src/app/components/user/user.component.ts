import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{

  name: string;
  age: number;
  email: string;
  address:Address;
  hobbies: string[];
  posts:Post[];
  isEdit: boolean=false;


  constructor(private dataService:DataService) 
  { 
    console.log('ngOnInit ran.. ');
  }

  ngOnInit() 
  {
    this.name='Sandeep Chunduru';
    this.age=60;
    this.email='sandeep.chunduri@me.com';
    this.address = {
      street:'2002 Winterborne Dr',
      city: 'Cary', 
      state:'NC'
    }
    this.hobbies = ['Write Code', 'Watch Movies', 'Listen to music'];
    this.dataService.getPosts().subscribe((posts) => {
       // console.log('In Posts');
       this.posts=posts;

    });

  }

  onClick(){
    this.name='Gargi Sarkar';
    this.hobbies.push('New Hobby');
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby){
       this.hobbies.unshift(hobby);
       return false;
  }

  deleteHobby(hobby){
    for(let i=0;i< this.hobbies.length; i++){
        if(this.hobbies[i] == hobby){
           this.hobbies.splice(i, 1);
        }
    }
   
  }

}

interface Address{
    street:string,
    city:string,
    state:string

}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
