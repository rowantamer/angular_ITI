import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slideIndex = 0;
  intervalTime: any;
  imagePaths = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
  ]
  showNextImage() {
    this.slideIndex++;
    const slides = document.querySelectorAll(".slide");
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    slides.forEach((slide, index) => {
      if (index === this.slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  showPrevImage() {
    this.slideIndex--;
    const slides = document.querySelectorAll(".slide");
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
      if (index === this.slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  slider() {
    this.intervalTime = setInterval(() => {
      this.showNextImage();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalTime);
  }
}
