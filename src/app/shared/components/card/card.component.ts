import { Component, ElementRef, HostListener, Input } from '@angular/core';

import type { Post } from '@shared/models/post.interface';

@Component({
  selector: 'hgw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data!: Post;

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
