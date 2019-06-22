import { trigger,state,transition,style,animate } from '@angular/animations';

export const errorMassageAnimation = trigger('errorInsertionAnimation',[
    transition(':enter',[style({opacity:0}),
      animate('100ms ease-out',style({
        opacity:1
      }))
    ]),
    transition(':leave',[
      animate('100ms ease-out',style({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))
    ])
  ])