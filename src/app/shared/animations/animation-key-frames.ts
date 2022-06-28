import {
  keyframes,
  style,
  AnimationKeyframesSequenceMetadata,
} from '@angular/animations';

export const moveFromRightFade: AnimationKeyframesSequenceMetadata = keyframes([
  style({ transform: 'translateX(100%)', offset: 0, 'z-index': '9999' }),
  style({ transform: 'translateX(0%)', offset: 1 }),
]);

export const moveFromRightKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 }),
  ]);

export const moveToLeftKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(0%)', offset: 0 }),
    style({ transform: 'translateX(-100%)', opacity: '0', offset: 1 }),
  ]);

export const moveFromLeftKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 }),
  ]);

export const moveToRightKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(0%)', offset: 0 }),
    style({ transform: 'translateX(100%)', opacity: '0', offset: 1 }),
  ]);

export const moveFromTopKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateY(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateY(0%)', offset: 1 }),
  ]);

export const moveToBottomKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateY(0%)', offset: 0 }),
    style({ transform: 'translateY(100%)', opacity: '0', offset: 1 }),
  ]);

export const moveFromBottomKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateY(100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateY(0%)', offset: 1 }),
  ]);

export const moveToTopKeyframes: AnimationKeyframesSequenceMetadata = keyframes(
  [
    style({ transform: 'translateY(0%)', offset: 0 }),
    style({ transform: 'translateY(-100%)', opacity: '0', offset: 1 }),
  ]
);

export const scaleDown: AnimationKeyframesSequenceMetadata = keyframes([
  style({ opacity: '1', transform: 'scale(1)', offset: 0 }),
  style({ opacity: '0', transform: 'scale(0.8)', offset: 1 }),
]);

export const fadeFrames: AnimationKeyframesSequenceMetadata = keyframes([
  style({ opacity: '1', offset: 0 }),
  style({ opacity: '0.3', offset: 1 }),
]);

export const rotateFlipToRightEnterFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '0.2',
      transform: 'translateZ(-1000px) rotateY(-90deg)',
      offset: 0,
    }),
    style({
      opacity: '1',
      transform: 'translateZ(0px) rotateY(0deg)',
      offset: 1,
    }),
  ]);

export const rotateFlipToRightLeaveFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'translateZ(0px) rotateY(0deg)',
      offset: 0,
    }),
    style({
      opacity: '0.2',
      transform: 'translateZ(-1000px) rotateY(90deg)',
      offset: 1,
    }),
  ]);

export const rotateCubeToTopEnterFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '0.3',
      transform: 'translateY(100%) rotateX(-90deg)',
      offset: 0,
    }),
    style({
      transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)',
      offset: 0.5,
    }),
    style({
      opacity: '1',
      transform: 'translateX(0%) translateZ(00px) rotateY(0deg)',
      offset: 1,
    }),
  ]);

export const rotateCubeToTopLeaveFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)',
      offset: 0.5,
    }),
    style({
      opacity: '0.3',
      transform: 'translateY(-100%) rotateX(90deg)',
      offset: 1,
    }),
  ]);

export const rotateRoomToLeftEnterFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '0.3',
      transform: 'translateX(100%) rotateY(-90deg)',
      offset: 0,
    }),
    style({
      opacity: '1',
      transform: 'translateX(0%) rotateY(0deg)',
      offset: 1,
    }),
  ]);

export const rotateRoomToLeftLeaveFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '1',
      transform: ' translateX(0%) rotateY(0deg)',
      offset: 0,
    }),
    style({
      opacity: '0.3',
      transform: 'translateX(-100%) rotateY(90deg)',
      offset: 1,
    }),
  ]);

export const rotateRoomToTopEnterFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '0.3',
      transform: 'translateY(100%) rotateX(90deg)',
      offset: 0,
    }),
    style({
      opacity: '1',
      transform: 'translate3d(0, 0, 0)',
      offset: 1,
    }),
  ]);

export const rotateRoomToTopLeaveFrames: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({
      opacity: '1',
      transform: 'translate3d(0, 0, 0)',
      offset: 0,
    }),
    style({
      opacity: '0.3',
      transform: 'translateY(-100%) rotateX(-90deg)',
      offset: 1,
    }),
  ]);
