import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  maderos: any;

  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
    this.HomeService.getMaderos().subscribe(data => {
      this.maderos = data;
    });
  }

}
