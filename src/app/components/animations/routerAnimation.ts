import { trigger,state,transition,style,animate,query, group } from '@angular/animations';

export const routerAnimations = trigger('routeAnimations',[

    transition('* <=> *',[ 
        query(':enter,:leave',[style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0

        })],{optional: true}),
        query(':enter',[style({opacity: 0}),
            animate('200ms ease-in-out',style({
                opacity: 1
            }))
        ],{optional: true}),
        query(':leave',[
            animate('200ms ease-out',style({
                opacity: 0
            }),)
        ],{optional: true})
  
    ])


])