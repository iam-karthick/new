import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './service/user.service';
import { InMemoryDataService } from './service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UserSearchComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    InMemoryWebApiModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
