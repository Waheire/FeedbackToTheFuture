import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeedBackToTheFuture';
  /**
   *
   */
  constructor(
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    initFlowbite();
    //  spinner starts on init
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}
