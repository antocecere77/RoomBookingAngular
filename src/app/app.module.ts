import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router, RouterModule } from '@angular/router';

import { RoomsComponent } from './admin/rooms/rooms.component';
import { UsersComponent } from './admin/users/users.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomDetailComponent } from './admin/rooms/room-detail/room-detail.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent},
  { path: 'admin/rooms', component: RoomsComponent},
  { path: '', component: CalendarComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RoomsComponent,
    UsersComponent,
    CalendarComponent,
    PageNotFoundComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
