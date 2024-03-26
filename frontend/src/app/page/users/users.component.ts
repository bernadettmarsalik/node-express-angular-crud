import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  list$: Subject<User[]> = this.userService.list$;
  columns: any[] = [];

  constructor(
    private userService: UserService,
    private config: ConfigService,
    private router: Router
  ) {
    this.columns = this.config.userColumns;
  }

  ngOnInit() {
    this.userService.get();
  }

  getNamePart(name: any, key: string): string {
    return name[key];
  }

  delete(user: User) {
    this.userService
      .delete(user)
      .subscribe((response) => console.log(`User id ${response} deleted.`));
  }

  navigateToCreateUser() {
    this.router.navigate(['create-user']);
  }
}
