import { Component, OnInit } from '@angular/core';

declare global {
  interface Console {
    frog: (s:any) => void;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ConsoleFrog';
  ngOnInit(): void {
    console.log("RIBBIT");
    console.frog("RIBBIT RIBBIT");
    }
}
