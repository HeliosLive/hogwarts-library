import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
} from '@angular/animations';

import {
  moveFromBottomKeyframes,
  moveFromTopKeyframes,
  moveToBottomKeyframes,
  moveToTopKeyframes,
  rotateRoomToTopEnterFrames,
  rotateRoomToTopLeaveFrames,
} from './animation-key-frames';
import { sharedStyles } from './animation-styles';

export const routerAnimations = trigger('routerAnimations', [
  transition(
    '* => login',
    [
      query(':enter, :leave', style(sharedStyles), { optional: true }),
      group([
        query(
          ':enter',
          [
            animate(
              '{{enterTiming}}s {{enterDelay}}s ease',
              moveFromBottomKeyframes
            ),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            animate(
              '{{leaveTiming}}s {{leaveDelay}}s ease',
              moveToTopKeyframes
            ),
          ],
          { optional: true }
        ),
      ]),
    ],
    {
      params: {
        enterTiming: '.7',
        leaveTiming: '.6',
        enterDelay: '0',
        leaveDelay: '0',
      },
    }
  ),
  transition(
    'login => home',
    [
      query(':enter, :leave', style(sharedStyles), { optional: true }),
      group([
        query(
          ':enter',
          [
            style({ opacity: '0', 'transform-origin': '50% 0%' }),
            animate(
              '{{enterTiming}}s {{enterTiming}}s ease-out',
              rotateRoomToTopEnterFrames
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ opacity: '1', 'transform-origin': '50% 100%' }),
            animate(
              '{{leaveTiming}}s {{leaveDelay}}s ease-in',
              rotateRoomToTopLeaveFrames
            ),
          ],
          { optional: true }
        ),
      ]),
    ],
    {
      params: {
        enterTiming: '.5',
        leaveTiming: '.4',
        enterDelay: '0',
        leaveDelay: '0',
      },
    }
  ),
  transition(
    '* => error',
    [
      query(':enter, :leave', style(sharedStyles), { optional: true }),
      group([
        query(
          ':enter',
          [
            animate(
              '{{enterTiming}}s {{enterDelay}}s ease',
              moveFromTopKeyframes
            ),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            animate(
              '{{leaveTiming}}s {{leaveDelay}}s ease',
              moveToBottomKeyframes
            ),
          ],
          { optional: true }
        ),
      ]),
    ],
    {
      params: {
        enterTiming: '.7',
        leaveTiming: '.6',
        enterDelay: '0',
        leaveDelay: '0',
      },
    }
  ),
]);
