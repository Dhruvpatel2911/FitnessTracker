import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css'],
})
export class QueryFormComponent implements OnInit {
  query!: string;
  name!: string;
  email!: string;
  phone!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.router.navigateByUrl('/');
  }
}
