import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { UsersRoutingModule } from './users-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { PublicCardsComponent } from './public-cards/public-cards.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MasterPageComponent,
    PublicCardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    RouterModule
   
  ]
})
export class UsersModule { }
