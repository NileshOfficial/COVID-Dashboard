import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'covid-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  currentCarouselBanner = 0;
  private intervalHandle: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalHandle = setInterval(this.rotateBanners.bind(this), 2000);
  }

  rotateBanners() {
    this.currentCarouselBanner = (this.currentCarouselBanner + 1) % 3;
  }

  changeBanner(idx: number) {
    this.currentCarouselBanner = idx;
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.rotateBanners.bind(this), 2000);
  }

  startRotation() {
    this.intervalHandle = setInterval(this.rotateBanners.bind(this), 2000);
  }

  stopRotation() {
    clearInterval(this.intervalHandle);
  }

  ngOnDestroy() {
    clearInterval(this.intervalHandle);
  }
}
