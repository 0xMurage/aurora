import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aurora-unauthenticated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.scss']
})
export class UnauthenticatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
