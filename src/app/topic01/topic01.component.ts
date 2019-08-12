import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-topic01',
  templateUrl: './topic01.component.html',
  styleUrls: ['./topic01.component.css']
})
export class Topic01Component implements OnInit {
  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log('Received:', this.ar.snapshot.paramMap.get('param'));
  }

  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: { secret: 'xyz' },
      fragment: 'passing fragment'
    };
    this.router.navigate(['/topic02'], navigationExtras);
  }
}
