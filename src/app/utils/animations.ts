import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const screenAnimation = trigger('screenAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(200%)', opacity: 0 }),
    animate(
      '1s ease-in-out',
      style({ transform: 'translateY(0%)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in-out',
      style({ transform: 'translateY(-100%)', opacity: 0 })
    ),
  ]),
]);

// transition(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))]),
// transition(':leave', [animate('1s', style({ opacity: 1 }))]),

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate(
      '0.5s ease-in-out',
      style({ transform: 'translateX(0%)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in-out',
      style({ transform: 'translateX(-100%)', opacity: 0 })
    ),
  ]),
]);
