import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appNotImage]',
  standalone: true
})
export class NotImageDirective implements OnChanges{

  @Input() appNotImage: string = '';
   defaultImage: string = 'https://previews.123rf.com/images/yoginta/yoginta2301/yoginta230100567/196853824-imagen-no-encontrada-ilustraci%C3%B3n-vectorial.jpg'

  constructor(
    private elementImg: ElementRef,
    private renderer: Renderer2
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appNotImage']) {
      this.setImage()
    }
  }

  private setImage() {
    const img = new Image();
    img.src = this.appNotImage;

    img.onload = () => {
      this.renderer.setStyle(this.elementImg.nativeElement, 'background-image', `url(${this.appNotImage})`);
    };
    img.onerror = () => {
      this.renderer.setStyle(this.elementImg.nativeElement, 'background-image', `url(${this.defaultImage})`);
    };
  }

}
