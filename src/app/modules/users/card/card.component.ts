import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user/user.model';
import { Md5 } from 'ts-md5/dist/md5';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('user') user!: UserModel;
  emailHash:string='';
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.getGravatal();
  }
  getGravatal(){
     this.emailHash = Md5.hashStr(this.user.email.trim().toLowerCase());
     
    }
}
