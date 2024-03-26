import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: any = {};
  columns: any = [];

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private router: Router
  ) {
    this.columns = this.config.userColumns;
  }

  ngOnInit() {}

  create(user: any) {
    // Merge first and last name into the name object
    user.name = {
      first: user.firstName,
      last: user.lastName,
    };

    // Remove the firstName and lastName properties from the user object
    delete user.firstName;
    delete user.lastName;

    this.userService.create(user).subscribe((response) => {
      // Handle the response if needed
      console.log('User created:', response);
      // Redirect to the user list page
      this.router.navigateByUrl('/users');
    });
  }

  createSubKey(user: User, col: any): any {
    if (!user[col.key]) {
      user[col.key] = {};
    }
    return user;
  }
}
