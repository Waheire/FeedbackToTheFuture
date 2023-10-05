import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var $: any; //Import jQuery

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('owlCarousel') owlCarousel! : ElementRef;

  ngAfterViewInit(): void {
    $(this.owlCarousel.nativeElement).owlCarousel({
      items:1,
      loop:1,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause: true,
    });
  }

  ngOnInit(): void {
    
  }

}
