import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>`
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
