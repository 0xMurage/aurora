import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aurora-authenticated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
