import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-public-cards',
  templateUrl: './public-cards.component.html',
  styleUrls: ['./public-cards.component.css']
})
export class PublicCardsComponent implements OnInit {
users:any=[];
pageSlice:any=[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllRecords().subscribe(
      (users) => {
        console.log(users);
        this.users=users;
        this.pageSlice=this.users.slice(0,4);
      },
      (err) => console.log
    );
  }
  onPageChange(event:PageEvent){
    const startIndex=event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if (endIndex>this.users.lenth) {
      endIndex=this.users.lenth
    }
    this.pageSlice=this.users.slice(startIndex,endIndex)
  }
  }


