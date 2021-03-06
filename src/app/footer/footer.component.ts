import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  scroll(selector: string) {
    const element = document.querySelector(selector);
    element ? element.scrollIntoView({behavior: "smooth"}): null;
}

  constructor() { }

  ngOnInit(): void {
  }

}
