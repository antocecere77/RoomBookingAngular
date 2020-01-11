import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { RoomDetailComponent } from './admin/rooms/room-detail/room-detail.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import { UsersComponent } from './admin/users/users.component';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomEditComponent } from './admin/rooms/room-edit/room-edit.component';

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
    RoomDetailComponent,
    UserDetailComponent,
    UserEditComponent,
    RoomEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
