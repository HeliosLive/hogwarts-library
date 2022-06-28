import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  startWith,
} from 'rxjs/operators';

import { routerAnimations } from '@shared/animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimations],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.listenViewportHeight();
    this.listenViewportWidth();
  }

  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }

  /* istanbul ignore next */
  private listenViewportHeight(): void {
    fromEvent(window, 'resize')
      .pipe(
        startWith({ target: { innerHeight: window.innerHeight } }),
        debounceTime(40),
        pluck('target', 'innerHeight'),
        distinctUntilChanged()
      )
      .subscribe((height) => {
        document.documentElement.style.setProperty(
          '--vh',
          `${Number(height) * 0.01}px`
        );
      });
  }

  /* istanbul ignore next */
  private listenViewportWidth(): void {
    fromEvent(window, 'resize')
      .pipe(
        startWith({ target: { innerWidth: window.innerWidth } }),
        debounceTime(40),
        pluck('target', 'innerWidth'),
        distinctUntilChanged()
      )
      .subscribe((width) => {
        document.documentElement.style.setProperty(
          '--vw',
          `${Number(width) * 0.01}px`
        );
      });
  }
}
