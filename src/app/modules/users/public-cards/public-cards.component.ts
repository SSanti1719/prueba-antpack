import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-public-cards',
  templateUrl: './public-cards.component.html',
  styleUrls: ['./public-cards.component.css']
})
export class PublicCardsComponent implements OnInit {
users:any=[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllRecords().subscribe(
      (users) => {
        console.log(users);
        this.users=users;
      },
      (err) => console.log
    );
  }
  }


