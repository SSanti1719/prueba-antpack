import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { UsersRoutingModule } from './users-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { PublicCardsComponent } from './public-cards/public-cards.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';

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
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule
    
   
  ]
})
export class UsersModule { }
