import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  list$: Observable<User[]> = this.userService.get();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.get().subscribe(
      (users) => console.log(users),
      (err) => console.log(err)
    );
  }
}
