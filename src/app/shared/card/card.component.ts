import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'hgw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event']) onClick() {
    let element = this.elementRef.nativeElement;
    const status = element.dataset.status;

    if (status) {
      delete element.dataset.status;
    } else {
      element.dataset.status = 'active';
    }
  }
}
