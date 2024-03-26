import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './page/users/users.component';
import { CreateUserComponent } from './page/create-user/create-user.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },

  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
