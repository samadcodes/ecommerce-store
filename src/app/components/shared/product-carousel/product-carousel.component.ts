import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductComponent } from "../product/product.component";
declare var $: any;

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
    imports: [ProductComponent]
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {

  @Input() products: ProductModel[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    //this.initializeOwlCarousel();
    this.initializeOwlCarouselJS();
  }

  initializeOwlCarousel() {
    const owlCarousel = $('.nonloop-block-3');
    if (owlCarousel.hasClass('owl-loaded')) {
      owlCarousel.trigger('destroy.owl.carousel');
      owlCarousel.find('.owl-stage-outer').children().unwrap();
      owlCarousel.removeClass("owl-center owl-loaded owl-text-select-on");
    }
  
    owlCarousel.owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 15,
      margin: 20,
      nav: true,
      navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
      responsive: {
        600: {
          margin: 20,
          items: 2
        },
        1000: {
          margin: 20,
          items: 3
        },
        1200: {
          margin: 20,
          items: 3
        }
      }
    });
  }
  
  initializeOwlCarouselJS() {
    var slider = function() {
      $('.nonloop-block-3').owlCarousel({
        center: false,
        items: 1,
        loop: false,
        stagePadding: 15,
        margin: 20,
        nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
          600:{
            margin: 20,
            items: 2
          },
          1000:{
            margin: 20,
            items: 3
          },
          1200:{
            margin: 20,
            items: 3
          }
        }
      });
    };
    slider();
  }
}
