import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic02',
  templateUrl: './topic02.component.html',
  styleUrls: ['./topic02.component.css']
})
export class Topic02Component implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.ar.snapshot.queryParamMap.get('secret'));
    console.log(this.ar.snapshot.fragment);
  }
}
