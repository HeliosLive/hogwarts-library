import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

export type ButtonColor = 'primary' | 'success' | 'warning' | 'danger';

const BUTTON_HOST_ATTRIBUTES = [
  'hgw-button',
  'hgw-raised-button',
  'hgw-outlined-button',
];

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  selector: `button[hgw-button], button[hgw-raised-button], button[hgw-outlined-button]`,
  exportAs: 'hgwButton',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.hgw-button-disabled]': 'disabled',
  },
  inputs: ['disabled'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input()
  @HostBinding('attr.color')
  color: ButtonColor = 'primary';

  @Input()
  @HostBinding('attr.data-cy')
  testId?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkButtonAttributes();
  }

  private checkButtonAttributes() {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this.hasHostAttributes(attr)) {
        (this.getHostElement() as HTMLElement).classList.add(attr);
      }
    }
  }

  private hasHostAttributes(...attributes: string[]) {
    return attributes.some((attribute) =>
      this.getHostElement().hasAttribute(attribute)
    );
  }

  private getHostElement() {
    return this.elementRef.nativeElement;
  }
}
